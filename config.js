var os = require('os')
var path = require('path')
var xtend = require('xtend')

var config = {
  shared: {
    dir: path.join(__dirname, '.hypercloud')
    hostname: 'hypercloud.local',
    port: 8080,
    email: {
      transport: 'stub',
      sender: '"Hypercloud" <noreply@hypercloud.local>'
    }
  },
  development: {},
  production: {
    dir: path.join(os.homedir(), '.hypercloud')
  }
}

var env = process.env.NODE_ENV || 'development'
module.exports = xtend(config.shared, config[env])
