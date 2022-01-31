module.exports = (sequelize, DataTypes) => {
    const Survey = sequelize.define('surveys',{
        answer:{
            type: DataTypes.TEXT,
            allowNull:false,
        },
    },{
        charset:"utf8",
        collate:"utf8_general_ci"
    });

    Survey.associate = (db) => {

    }

    return Survey
}
