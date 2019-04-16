'use strict';

const User = require('../models/user.model');

class UsersController {
  static async create(req, res) {
    try {
      const data = req.body
      await User.create(data)
      return res.send("success")
    } catch (err) {
      return res.send(err)
    }
  }
}

module.exports = UsersController
