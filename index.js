const queryString = require('querystring')
const FormData = require('form-data')
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
  async products (formdata) {
    const options = {
      auth: {
        username: this.username,
        password: this.password
      },
      headers: formdata.getHeaders()
    }

    return axios.post(`https://${this.host}/products`, formdata, options)
      .then(res => res.data)
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


  /**
   *
   *
   * @param {*} params
   * @return {*} 
   * @memberof Hiboutik
   */
  async productsByID (id) {
    const options = {
      auth: {
        username: this.username,
        password: this.password
      }
    }

    return axios.get(`https://${this.host}/products/${id}`, options)
      .then(res => res.data)
  }

  async productsByName (name) {
    const options = {
      auth: {
        username: this.username,
        password: this.password
      }
    }

    return axios.get(`https://${this.host}/products/search/name/${name}`, options)
      .then(res => res.data)
  }

  async customersBySearch (params) {
    const options = {
      auth: {
        username: this.username,
        password: this.password
      }
    }

    return axios.get(`https://${this.host}/customers/search/${queryString.stringify(params)}`, options)
      .then(res => res.data)
  }

  async sales (formdata) {
    const options = {
      auth: {
        username: this.username,
        password: this.password
      },
      headers: formdata.getHeaders()
    }
    return axios.post(`https://${this.host}/sales`, formdata, options)
      .then(res => res.data)
  }


  async salesAddProduct (formdata) {
    const options = {
      auth: {
        username: this.username,
        password: this.password
      },
      headers: formdata.getHeaders()
    }
    return axios.post(`https://${this.host}/sales/add_product`, formdata, options)
      .then(res => res.data)
  }

  static toFormData (data) {
    const formData = new FormData()
    Object.keys(data).forEach(key => formData.append(key, data[key]))
    return formData
  }
}

module.exports = Hiboutik