class Errors {
	badRequest(res, message){
		return res.status(400).json(message);
	}

	notFound(res, message){
		return res.status(404).json(message);
	}
}


module.exports = new Errors();