module.exports = {
  apps: [
    {
      name: 'Skins',
      port: '9090',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
