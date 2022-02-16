const schema = require('../../api/models/people');
const bcrypt = require('bcryptjs');
 
const tokenGenerator = require('../../api/utils/tokenGenerator');
 
class AuthenticateController {
	async authenticate (req, res) {
		const { email, senha } = req.body;
		const people = await schema.findOne({ email }).select('+senha');
 
		if (!people) {
			return res.status(400).json({ error: 'user not found' });
		}
 
		if (!await bcrypt.compare(senha, people.senha)) {
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