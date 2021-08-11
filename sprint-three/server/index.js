//const axios = require("axios");
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const videoRoute = require("./routes/videos");

const app = express();

//prevents that error
app.use(cors());

//flips when in addition to image render.
//app.use(express.static("public"));

app.use((req, res, next) => {
  console.log(`Incoming req from path ${req.path}`);
  next();
});

app.use(express.json());

function loadVideos() {
  return JSON.parse(fs.readFileSync("./data/videos.json", "utf-8"));
}

app.get('/', function(req, res) {
  const videos = loadVideos();
  res.json(videos);
})

app.use("/videos", videoRoute);


app.get('/videos', function(req, res) {
  const videos = loadVideos();
  res.json(videos);
})

app.post('/videos',  function(req, res) {
  const videos = loadVideos();
  const { title , description } = req.body;
  console.log( title, description )

  if (!title) {
    return res.status(400).json({
      message: "Title is required",
    });
  }

  if (!description) {
    return res.status(400).json({
      message: "Description is required",
    });
  }

  //https://i.imgur.com/i6S8m7I.jpg
  //ok, I know the images should be coming from  <image: "http://localhost:8082/images/Upload-video-preview.jpg", but I can't get it to work without a complete shut down error. so I'm just putting one of the other images up.
  const newVideo = {
    id: uuidv4(),
    title, 
    channel: "Wild World",
    image: "https://i.imgur.com/i6S8m7I.jpg",
    description,
    views: "1,466,325",
    likes: "1,456",
    duration: "4:01",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: 1545162376000,
    comments: [{},{},{}]
  }

  videos.push(newVideo);
  
  fs.writeFileSync("./data/videos.json", JSON.stringify(videos));

  res.json((videos));
});



//get a single video
app.get('/videos/:id', function(req, res){
  const videos = loadVideos();
  const { id } = req.params;
  
  const foundVideo = videos.find((video) => {
    if (video.id === id) {
      return true;
    } else {
      return false;
    }
  });

  if (!foundVideo) {
    return res
     .status(404)
     .json({ message: `Unable to find video by id ${id}` });
      }
    
// return the single video that matches
return res.json(foundVideo);
});





app.listen(8082, () => {
  console.log('Server is running on port 8082');
})




