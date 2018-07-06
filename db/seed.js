const connection = require("./connection");
const Gif = connection.models.Gif;

const seeds = require("./seedData");

Gif.destroy({ where: {} }).then(_ => {
  console.log("Dropped the DB");
  Gif.bulkCreate(seeds).then(seededEntries => {
    console.log(seededEntries);
    process.exit();
  });
});
