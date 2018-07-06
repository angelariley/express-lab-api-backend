module.exports = (sequelize, DataTypes) => {
    return sequelize.define("gif", {
      name: DataTypes.TEXT,
      url: DataTypes.TEXT,
      tag: DataTypes.TEXT
    });
  };
  