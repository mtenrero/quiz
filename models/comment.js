/**
 * Created by marcos on 17/8/15.
 */
module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        'Comment',
        { texto: {
            type: DataTypes.STRING,
            validate: { notEmpty: {msg: "-> Falta Comentario"}}
        },
            publicado: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        }
    );
}