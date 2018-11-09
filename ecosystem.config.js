module.exports = {
  apps: [{
    name: 'vue-ssr-danny',
    script: 'server/index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy: {
    production: {
      user: 'Danny',
      host: '212.83.163.1',
      ref: 'origin/master',
      repo: 'git@github.com:dannyhenian/webpack-vue-ssr-danny.git',
      path: '/home/danny/vue-ssr-demo',
      'post-deploy': 'cnpm install && pm2 reload ecosystem.config.js --env production'
    }
  }
}
