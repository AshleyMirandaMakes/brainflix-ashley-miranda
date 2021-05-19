import Thumbnail from '../../assets/images/Upload-video-preview.jpg'
import './UploadPage.scss'

function UploadPage () {
  return (
    <main>
      <section className="upload">
      <h2 className="upload__heading">Upload Video</h2>
      <div className="upload__image-container">
      <h4 className="upload__title">VIDEO THUMBNAIL</h4>
      <img className="upload__image "src={Thumbnail} alt="upload-image"/>
      </div>
      <form className="upload__content">
        <div className="upload__form-container">
        <label className="upload__title">TITLE YOUR VIDEO</label>
        <input className="upload__input" type="text" placeholder="Add a title to your video"></input>
        <label className="upload__title">ADD A VIDEO DESCRIPTION</label>
        <textarea className="upload__textarea" type="text" name="description" placeholder="Add a description of your video"></textarea>
        </div>
      </form>
      <div className="upload__button-container">
      <button className="upload__button">COMMENT</button>
        <button className="upload__button--special">CANCEL</button>
      </div>
      </section>
    </main>
  )
}

export default UploadPage;