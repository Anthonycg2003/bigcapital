const crypto = require('crypto');

if (!process.env.APP_JWT_SECRET) {
  process.env.APP_JWT_SECRET = crypto.randomBytes(32).toString('hex');
}

let expressApp;

async function getApp() {
  if (!expressApp) {
    // Static require so the hosted file tracer includes the server and its dependencies.
    const { createApp } = require('../packages/server/dist/main.js');
    const nestApp = await createApp();
    expressApp = nestApp.getHttpAdapter().getInstance();
  }

  return expressApp;
}

module.exports = async (req, res) => {
  const app = await getApp();
  const url = req.url || '/';

  if (!url.startsWith('/api')) {
    const suffix = url.startsWith('/') ? url : `/${url}`;
    req.url = `/api${suffix}`;
  }

  return app(req, res);
};
