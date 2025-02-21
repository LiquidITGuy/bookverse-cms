module.exports = (env) => ([
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://pwa-cms-s3.ln1.eu'],
          'media-src': ["'self'", 'data:', 'blob:', 'https://pwa-cms-s3.ln1.eu'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
]);
