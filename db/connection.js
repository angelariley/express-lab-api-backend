const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL)

const sequelize = new Sequelize("gifs", "inclassuser", "Hartford1810", {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false // this helps prevent SQL injection
});

const Gif = sequelize.import("../models/Gif");

sequelize.authenticate().then(() => {
  console.log("Connected");
});

module.exports = {
  Sequelize,
  sequelize,
  models: {
    Gif
  }
};
