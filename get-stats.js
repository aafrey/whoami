const getStats = (req) => {
  return { 
    ipaddress: req.headers['x-forwarded-for'].split(',')[0] || 'unknown',
    language: req.headers['accept-language'].split(',')[0] || 'unknown',
    os: req.headers['user-agent'].match(/\((.*)\)/).pop().split(')')[0] || 'unknown'
  }
}

module.exports = getStats