import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

//-Components
import Header from './components/Header';
import Video from './components/Video';

//-Pages
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'



//-Styles
import './App.scss';


class App extends Component {


  render() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Switch>
            <Redirect path="/home" to="/" />
            {/* <Redirect path="/videos" to="/" /> */}
            <Route path="/" component={HomePage} exact />
            <Route path="/videos/:videoId" component={HomePage} />
            <Route path="/upload" component={UploadPage} />
            <Route component={NotFoundPage} />
          </Switch>
       </BrowserRouter>
    </div>
  );
  }
}

//Route path="/videos/:videoId" component={VideoItem?}
//

export default App;
