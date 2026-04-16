FROM nginx:alpine

# Copie la config nginx custom
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copie tous les fichiers statiques de l'app
COPY . /usr/share/nginx/html/

# Supprime les fichiers de config du container (pas nécessaires au runtime)
RUN rm -f /usr/share/nginx/html/Dockerfile \
          /usr/share/nginx/html/docker-compose.yml \
          /usr/share/nginx/html/nginx.conf \
          /usr/share/nginx/html/package.json \
          /usr/share/nginx/html/.htaccess \
    && chmod -R 755 /usr/share/nginx/html \
    && chown -R nginx:nginx /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost/ || exit 1
