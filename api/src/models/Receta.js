const {DataTypes} = require("sequelize");

module.exports=(sequelize)=>{
    sequelize.define("receta",{
        
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
          },

        nombre:{
            type:DataTypes.STRING,
            allowNull:false
        },

        descripcion:{
            type:DataTypes.TEXT,
            allowNull:false
        },

        imagen:{
            type:DataTypes.STRING,
            allowNull:false
        },

        precio:{
            type:DataTypes.INTEGER,
            allowNull:false

        }

    })
}