/**
 * Created by Marcos on 02/08/2015.
 */

//Definicion del modelo de Quiz
module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        'Quiz',
        { pregunta: {
            type: DataTypes.STRING,
            validate: { notEmpty: {msg: "-> Falta Pregunta"}}
        },
            respuesta: {
                type: DataTypes.STRING,
                validate: { notEmpty: {msg: "-> Falta Respuesta"}}
            },
            tema: {
                type: DataTypes.STRING,
                validate: { notEmpty: {msg: "-> Falta Tema"}}
            }
        }
    );
};
