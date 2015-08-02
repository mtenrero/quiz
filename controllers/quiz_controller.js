var models = require('../models/models.js');

// GET /quizes/question
exports.question = function(req, res) {

	models.Quiz.findAll().success(function(quiz){
		res.render("quizes/question", { pregunta: quiz[0].pregunta });
	});
}

// GET /quizes/answer
exports.answer = function(req, res) {

	models.Quiz.findAll().success(function(quiz){

		var respuestaUsuario = req.query.respuesta.toUpperCase(),
			data;

		if(respuestaUsuario === quiz[0].respuesta.toUpperCase()){
			data = {respuesta: "Correcto!"};
		}else{
			data = {respuesta: "Incorrecto"};
		}

		res.render("quizes/answer", data);
	});
}

exports.author = function(req, res){
	res.render("author");
}
