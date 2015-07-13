// GET /quizes/question
exports.question = function(request, response) {
    response.render('quizes/question', {pregunta: 'Capital de Italia'});
};

// GET /quizes/answer
exports.answer = function(request, response) {
    if (request.query.respuesta === 'Roma') {
        response.render('quizes/answer', {respuesta: 'Correcto'});
    } else {
        response.render('quizes/answer', {respuesta: 'Incorrecto'});
    }
}