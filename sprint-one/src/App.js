import './App.scss';
import Nav from './components/Nav';
import '../src/partials/_resets.scss';
import VideoList from './components/VideoList';
import VideoDisplay from './components/VideoDisplay';

//-Data
import videos from '../src/assets/data/videos.json';
import videoDetails from '../src/assets/data/video-details.json';

function App() {
  return (
    <div className="App">
      <Nav />
      <VideoDisplay videoDetails={videoDetails} />
      <div className="videoList__container">
        <h4 className="videoList__title">NEXT VIDEO</h4>
        <VideoList videos={videos}/>
      </div>
    </div>
  );
}

export default App;
