const bcrypt = require('bcryptjs');
const schema = require('../models/people');

const tokenGenerator = require('../utils/tokenGenerator');

class AuthenticateController {
  // eslint-disable-next-line consistent-return
  async authenticate(req, res) {
    const { email, senha } = req.body;
    const people = await schema.findOne({ email }).select('+senha');

    if (!people) {
      return res.status(400).json({ error: 'user not found' });
    }

    if (!(await bcrypt.compare(senha, people.senha))) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    people.senha = undefined;

    res.send({
      people,
      token: tokenGenerator({ id: people.id })
    });
  }
}

module.exports = new AuthenticateController();
