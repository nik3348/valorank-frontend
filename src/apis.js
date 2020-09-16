const protocol = 'http://'
const host = 'localhost'
const port = '3000'
const domain = protocol + host + ':' + port

module.exports = {
  'signup': domain + '/signup',
  'login': domain + '/login'
}
