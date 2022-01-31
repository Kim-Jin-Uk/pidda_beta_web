module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('images',{
        key:{
            type: DataTypes.STRING(64),
            allowNull:false,
        },
        url:{
            type: DataTypes.TEXT,
            allowNull:false,
        },
    },{
        charset:"utf8",
        collate:"utf8_general_ci"
    });

    Image.associate = (db) => {

    }

    return Image
}
