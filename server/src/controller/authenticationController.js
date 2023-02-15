const {User} = require('../models/user')
const config = require('../config/config')


module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJson = user.toJSON()
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
    console.log(req.body.email)

  }
}