var path = require('path');
var Sequelize = require('sequelize');

// Postgres DATABASE_URL = portgres://admin:a73a621fa94d1ddcc76870cda04ec06ad8fe4cbf151cd33b3d69ccd2c7ea8794@10.251.97.108:5432/database
// SQLite   DATABASE_URL = sqlite://:@:/
var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var DB_name  = (url[6]||null);
var user     = (url[2]||null);
var pwd      = (url[3]||null);
var protocol = (url[1]||null);
var dialect  = (url[1]||null);
var port     = (url[5]||null);
var host     = (url[4]||null);
var storage  = process.env.DATABASE_STORAGE;

// Cargar Modelo ORM
var Quiz = sequelize.import(path.join(__dirname, 'quiz'));
exports.Quiz = Quiz;

// Usar BBDD SQLite o Postgres
var sequelize = new Sequelize(DB_name, user, pwd, {
    dialect:  protocol,
    protocol: protocol,
    port:     port,
    host:     host,
    storage:  storage,  // solo SQLite (.env)
    omitNull: true      // solo Postgres
});

sequelize.sync().success(function(){
	Quiz.count().success(function(count){

		if(count === 0){
			Quiz.create({
				pregunta: '¿Capital de Italia?',
				respuesta: 'Roma'
			}).success(function(){ console.log("Base de datos inicializada") });
		}

	});
});
