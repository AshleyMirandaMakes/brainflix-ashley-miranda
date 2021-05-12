import './App.scss';
import Nav from './components/Nav';
import '../src/partials/_resets.scss';
import VideoList from './components/VideoList';

//-Data
import videos from '../src/assets/data/videos.json';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="videoList__container">
        <h4 className="videoList__title">NEXT VIDEO</h4>
        <VideoList videos={videos}/>
      </div>
    </div>
  );
}

export default App;
