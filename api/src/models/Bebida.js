const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    
    sequelize.define('bebida', {

    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  });
};

