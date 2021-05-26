const axios = require("axios");
const express = require("express");
const fs = require("fs");

const app = express();

// const API_URL =" https://project-2-api.herokuapp.com";
// const API_KEY = "?api_key=2676221a-58c9-4883-a7b6-19edba276a48";
// const VIDEOS_LIST = "/videos";


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


// I have this file handy, but unsure.
const videos = [
    {
      "id": "1af0jruup5gu",
      "title": "BMX Rampage: 2018 Highlights",
      "channel": "Red Cow",
      "image": "https://i.imgur.com/l2Xfgpl.jpg"
    },
    {
      "id": "1ainjruutd1j",
      "title": "Become A Travel Pro In One Easy Lesson",
      "channel": "Todd Welch",
      "image": "https://i.imgur.com/5qyCZrD.jpg"
    },
    {
      "id": "1aivjruutn6a",
      "title": "Les Houches The Hidden Gem Of The Chamonix",
      "channel": "Cornelia Blair",
      "image": "https://i.imgur.com/yFS8EBr.jpg"
    },
  ];


app.get('/videos', function(req, res) {
  res.send("Sending a video");
})



app.listen(8080, () => {
  console.log('Server is running on port 8080');
});