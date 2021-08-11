const express = require("express");
const router = express.Router();
const fs = require("fs");
const app = express();

module.exports = router;

//app.use(express.static("public"));

router
  .route("/")
  .get((_req,res) => {
    const videos = JSON.parse(fs.readFileSync(__dirname+"/../data/videos.json"));
    console.log(videos);
    return res.json(videos);
})  


    module.exports = router;