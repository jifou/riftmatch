// Rewriting proxy: forwards requests to Payload on 3001,
// and rewrites all references of localhost:3001 → localhost:PROXY_PORT in responses
import http from 'http'
import { gunzipSync, brotliDecompressSync, inflateSync } from 'zlib'

const TARGET = { host: '127.0.0.1', port: 3001 }
const PROXY_PORT = process.env.PORT || 3010

const REWRITE_TYPES = ['text/html', 'application/json', 'application/javascript', 'text/javascript']

function rewrite(buf, encoding) {
  try {
    let raw = buf
    if (encoding === 'gzip') raw = gunzipSync(buf)
    else if (encoding === 'br') raw = brotliDecompressSync(buf)
    else if (encoding === 'deflate') raw = inflateSync(buf)

    const str = raw.toString('utf8')
      .replaceAll(`localhost:${TARGET.port}`, `localhost:${PROXY_PORT}`)
      .replaceAll(`127.0.0.1:${TARGET.port}`, `localhost:${PROXY_PORT}`)
    return Buffer.from(str, 'utf8')
  } catch {
    return buf
  }
}

http.createServer((req, res) => {
  const opts = {
    ...TARGET,
    path: req.url,
    method: req.method,
    headers: { ...req.headers, host: `localhost:${TARGET.port}` },
  }
  // Remove encoding so we can rewrite bodies easily
  delete opts.headers['accept-encoding']

  const proxy = http.request(opts, (pRes) => {
    const ct = pRes.headers['content-type'] || ''
    const shouldRewrite = REWRITE_TYPES.some(t => ct.includes(t))

    if (!shouldRewrite) {
      res.writeHead(pRes.statusCode, pRes.headers)
      pRes.pipe(res)
      return
    }

    const chunks = []
    pRes.on('data', c => chunks.push(c))
    pRes.on('end', () => {
      const buf = Buffer.concat(chunks)
      const rewritten = rewrite(buf, pRes.headers['content-encoding'])
      const headers = { ...pRes.headers }
      delete headers['content-encoding']
      headers['content-length'] = Buffer.byteLength(rewritten)
      res.writeHead(pRes.statusCode, headers)
      res.end(rewritten)
    })
  })

  proxy.on('error', () => { res.writeHead(502); res.end('Payload unreachable') })
  req.pipe(proxy)
}).listen(PROXY_PORT, () =>
  console.log(`Proxy :${PROXY_PORT} → :${TARGET.port} (with URL rewriting)`)
)
