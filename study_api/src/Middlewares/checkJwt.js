const { expressjwt } = require('express-jwt');

const jwks = require('jwks-rsa');

const checkJwt = expressjwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 10,
      jwksUri: 'https://dev-8nvihjhtyzz7knl5.us.auth0.com/.well-known/jwks.json'
    }),
    audience: '2b85CAI90YD6OJVPARoHQKIFEXcqqQ3V',
    issuer: 'https://dev-8nvihjhtyzz7knl5.us.auth0.com/',
    algorithms: ['RS256']
  });


module.exports= checkJwt