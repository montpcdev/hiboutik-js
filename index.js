const queryString = require('querystring')
const axios = require('axios')

/**
 *
 *
 * @class Hiboutik
 */
class Hiboutik {


  /**
   * Creates an instance of Hiboutik.
   * @param {*} host
   * @param {*} username
   * @param {*} password
   * @memberof Hiboutik
   */
  constructor(host, username, password) {
    if (!host) { throw new Error('No host provided') }
    if (!username) { throw new Error('No username provided') }
    if (!password) { throw new Error('No password provided') }

    this.host = host
    this.username = username
    this.password = password
  }

  /**
   *
   *
   * @param {*} params
   * @return {*} 
   * @memberof Hiboutik
   */
  async productsList (params) {
    const options = {
      auth: {
        username: this.username,
        password: this.password
      }
    }

    return axios.get(`https://${this.host}/products?${queryString.stringify(params)}`, options)
      .then(res => res.data)
  }
}

module.exports = Hiboutik