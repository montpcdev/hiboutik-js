require('dotenv').config()
const { expect } = require('chai')

describe('hiboutik', () => {
  const Hiboutik = require('../index')

  describe('initialize', () => {
    context('Incomplete constructor params', () => {
      it('throws: No host provided', () => expect(() => new Hiboutik()).to.throw('No host provided'))
      it('throws: No username provided', () => expect(() => new Hiboutik('a')).to.throw('No username provided'))
      it('throws: No password provided', () => expect(() => new Hiboutik('a', 'b')).to.throw('No password provided'))
    })
  })

  describe('products', () => {
    context('productsList', () => {
      const client = new Hiboutik(process.env.HIBOUTIK_HOST, process.env.HIBOUTIK_USERNAME, process.env.HIBOUTIK_PASSWORD)

      it('returns list', async () => {
        const res = await client.productsList()
        expect(res).to.be.an('array')
      })
    })
  })
})