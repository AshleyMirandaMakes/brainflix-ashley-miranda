const axios = require("axios");
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const videoRoute = require("./routes/videos");

const app = express();

//prevents that error
app.use(cors());
//gets my static images, might not need /images
app.use(express.static("./public/images"))
//middleware?
app.use((req, res, next) => {
  console.log(`Incoming req from path ${req.path}`);
  //no loop
  next();
});

//validate request has header? I dunno whatever

app.use((req, res, next) => {
  if (
    req.method === "POST" &&
    req.headers["content-type"] !== "application/json"
  ) {
    return res.status(400).json({
      message: "POST requests must contain content-type=application/json",
    });
  } else {
    next();
  }
});

app.use(express.json());

app.use("/api/v1/videos", videoRoute);


app.get('/videos', function(req, res) {
  const videos = loadVideos();
  res.json(videos);
})



function loadVideos() {
  return JSON.parse(fs.readFileSync("./data/videos.json", "utf-8"));
}


//get a single video
app.get('/videos/:video', function(req, res){
  let myVideo = req.params.video;
      console.log(myVideo);
  if (videos.some(video => {
      if (video.id === myVideo){
          return true;
      } else {
          return false;
      }
  } )) {res.send("That video exists")} 
      else {res.send("That video does not exist")}
});



app.listen(8081, () => {
  console.log('Server is running on port 8081');
})

// const exampleVideo = {
//   "id": "kjnepriwugxyowrgcheou1",
//   "title" : "this is a video",
//   "channel" : "this sucks",
//   // "image" : "./public/images/Upload-video-preview.jpg"
// }

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


//this wrote my videos.json file?
// axios.get(API_URL + VIDEOS_LIST + API_KEY)
//   .then((response) => {
//     // console.log(response.data);
//     fs.writeFile(`./data/videos.json`, JSON.stringify(response.data), (error) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log('file written successfully');
//       }})
//   })
//   .catch((error) => {
//     console.log(error)
//   }); 