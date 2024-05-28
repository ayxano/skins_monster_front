module.exports = {
  apps: [
    {
      name: 'Skins',
      port: '8083',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
