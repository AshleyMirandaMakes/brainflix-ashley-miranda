const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

module.exports = router;

router
  .route("/")
  .get((_req,res) => {
    const videos = JSON.parse(fs.readFileSync(__dirname+"/../data/videos.json"));
    console.log(videos);
    return res.json(videos);
})  


    module.exports = router;