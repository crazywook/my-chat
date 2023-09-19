import * as core from 'express-serve-static-core';

export function routeHealth(app: core.Express) {
  app.get('/health', (req, res) => {
    res.json({
      message: 'healthy'
    });
  });
}