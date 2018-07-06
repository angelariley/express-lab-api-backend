const express = require("express");
const app = express();
const parser = require("body-parser");
const cors = require("cors");


app.use(parser.urlencoded({extended: true})) // interprets key value pairs in URLs
app.use(parser.json()) // interprets a stringified JSON object on the request body


const gifsController = require("./controllers/gifs");
app.use("/gifs", gifsController)
// app.use("/api/bookmarks", bookmarksController)
app.use(cors());



app.listen(3000, ( ) => {
    console.log("WORKING 3K");
})

require('dotenv').config()

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () =>  {
   console.log(`running on PORT:$ {app.get('port')}`)
}); 