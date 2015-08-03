/**
 * Created by Marcos on 02/08/2015.
 */

//Definicion del modelo de Quiz
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Quiz',
        {
            pregunta: DataTypes.STRING,
            respuesta: DataTypes.STRING
        });
};
