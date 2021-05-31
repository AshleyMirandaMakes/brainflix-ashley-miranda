import DonBot from "../../assets/images/FuturamaFileNotFound.jpeg"

import "./NotFoundPage.scss"

function NotFoundPage () {
  return (
    <div className="notFound">
      <img src={DonBot} alt="File Not Found" className="notFound__image"/>
      <h5 className="notFound__title">Copyright Fox Entertainment, all rights reserved.</h5>
    </div>
  )
}

export default NotFoundPage;