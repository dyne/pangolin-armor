module.exports = {
  apps: [
    {
      name: 'proxy',
      script: 'node index.js',
      time: true,
      instances: 1,
      autorestart: true,
      max_restarts: 50,
      watch: true,
    },
  ],
  deploy: {
    production: {
      host: 'deploy_staging',
      ref: 'origin/main',
      repo: 'https://github.com/dyne/pangolin-armor',
      path: '/root/pangolin-armor',
      'post-deploy':
        'yarn install && pm2 reload ecosystem.config.js --env production && pm2 save',
      env: {
        NODE_ENV: 'production',
      },
    },
  },
}
