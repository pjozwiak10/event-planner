module.exports = {
  async rewrites() {
    return [
      // PL
      { source: '/konto', destination: '/account', },
      { source: '/mojekonto', destination: '/myaccount', },
      // ENG
      { source: '/account', destination: '/account', },
      { source: '/myaccount', destination: '/myaccount', },
    ]
  },
}