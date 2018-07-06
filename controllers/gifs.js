const router = require("express").Router();
const Gif = require("../db/connection").models.Gif;

//list all items in json
router.get("/", (req, res) => {
    Gif.findAll().then(gifs =>{
    res.json(gifs);
    });
});

//route to id specific items in json
router.get("/:id", (req, res) => {
    Gif.findById(req.params.id).then(gif =>{
     res.json(gif);   
    });
});


router.post("/", (req, res ) => {
    Gif.create(req.body).then(() => {
        Gif.findAll().then(gifs => {
            res.json(gifs);
        });
    });
});

router.put("/:id", (req, res) => {
    Gif.findById(req.params.id).then(gif => {
      gif.updateAttributes(req.body).then(gif => {
        Gif.findAll().then(gifs => {
          res.json(gifs);
      });
      });
    });
  });
  
  router.delete("/:id", (req, res) => {
    Gif.findById(req.params.id).then(gif => {
      gif.destroy().then(_ => {
        Gif.findAll().then(gifs => {
          res.json(gifs);
        });
      });
    });
  });

module.exports = router;