//const axios = require("axios");
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const videoRoute = require("./routes/videos");

const app = express();

//prevents that error
app.use(cors());
//gets my static images, might not need /images
// doesn't exist
// app.use(express.static("./public/images"))
//middleware?
app.use((req, res, next) => {
  console.log(`Incoming req from path ${req.path}`);
  //no loop
  next();
});

//validate request has header? I dunno whatever

// app.use((req, res, next) => {
//   if (
//     req.method === "POST" &&
//     req.headers["content-type"] !== "application/json"
//   ) {
//     return res.status(400).json({
//       message: "POST requests must contain content-type=application/json",
//     });
//   } else {
//     next();
//   }
// });

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

  const newVideo = {
    id: uuidv4,
    title, // might be name
    channel: "Wild World",
    image: "https://i.imgur.com/l2Xfgpl.jpg",
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

  res.json(videos);
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



// //was videoList, worked.
// app.get('/videos', function(req, res){
//   res.json(videos);
// });

// //post a new video
// app.post('/videos', function (req, res){
//     // req.body is going to contain the post request data
//     // 1. Read data from a file
//     // 2. Push the new shoe from req.body into the array
//     // 3. Write data to the file
//     // 4. Respond!
// })


