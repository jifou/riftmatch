import express from 'express'
import payload from 'payload'

require('dotenv').config()

const app = express()

// Redirect root to admin
app.get('/', (_, res) => res.redirect('/admin'))

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || 'CHANGE_ME_IN_PRODUCTION',
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  const port = process.env.PORT || 3000
  app.listen(port, () => {
    payload.logger.info(`Server running on port ${port}`)
  })
}

start()
