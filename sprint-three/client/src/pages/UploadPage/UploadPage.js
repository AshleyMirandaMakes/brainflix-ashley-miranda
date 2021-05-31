import Thumbnail from '../../assets/images/Upload-video-preview.jpg'
import { Component } from 'react';
import { Redirect } from "react-router-dom"
import './UploadPage.scss'
import axios from 'axios';


class UploadPage extends Component {
  state = {
    uploadTitle : "",
    uploadDescription : "",
    toHomePage : false
  }

  alertMessage= () => {
    alert("Video Uploaded!")
  }

  addNewVideo = (event) => {
    event.preventDefault(); 
    axios
    .post("http://localhost:8082/videos", {
      title : event.target.uploadTitle.value,
      description : event.target.uploadDescription.value
    })
    .then((response) => {
      console.log(response)
      this.setState({
        toHomePage : true,
      })
      this.alertMessage();
    })
    .catch((error) => {
      console.log(`you have an ${error} right here`)
    })
  }


  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });

    if (this.state.uploadTitle.length > 1 && this.state.uploadTitle.length < 10) {
      console.log("Please enter a name with at least10 letters!")
    }
    if (this.state.uploadDescription.length < 20) {
      console.log("Please enter a name with at least 20 letters!")
    }
 }

handleUploadSubmit = () => {
   if (!this.state.uploadTitle || !this.state.uploadDescription) {
     alert("Please enter the required inputs.");
     return;
   } else {
     alert("Upload successful!");
   }
 }

  render() {
    if (this.state.toHomePage === true) {
      console.log("state has changed")
      return (<Redirect to="/"></Redirect>);
    } 

    return (
      <main>
        <section className="upload">
        <h2 className="upload__heading">Upload Video</h2>
        <div className="upload__flex-container">
          <div className="upload__image-container">
          <h4 className="upload__title">VIDEO THUMBNAIL</h4>
          <img className="upload__image "src={Thumbnail} alt="upload-image"/>
          </div>
          <form className="upload__form" 
            onSubmit={this.addNewVideo}>
            <div className="upload__form-container">
              <label className="upload__title">TITLE YOUR VIDEO</label>
              <input 
                className="upload__input" 
                type="text" 
                name="uploadTitle" 
                placeholder="Add a title to your video"
                value={this.state.uploadTitle}
                onChange={this.handleInputChange} />
                {this.state.uploadTitle.length >1 && this.state.uploadTitle.length < 10 ? <p>Please enter a title with at least 10 letters.</p> : ''}
              <label className="upload__title">ADD A VIDEO DESCRIPTION</label>
              <input 
                className="upload__textarea" 
                type="text" 
                name="uploadDescription" 
                placeholder="Add a description of your video"
                value={this.state.uploadDescription}
                onChange={this.handleInputChange}/>
                {this.state.uploadDescription.length 
                > 1 && this.state.uploadDescription.length < 20 ? <p>Please enter a description with at least 20 letters.</p> : ''}
              </div> 
              <button type="submit" className="upload__button">PUBLISH</button>  
          </form>
          </div>
        <div className="upload__button-container">
        <button className="upload__button--special">CANCEL</button>
        </div>
        </section>
      </main>
    )
  }

}


export default UploadPage;

{/* <div className="upload__button-container">
<button className="upload__button" onClick={this.handleUploadSubmit} >PUBLISH</button>  */}