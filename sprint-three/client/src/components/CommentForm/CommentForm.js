import UserIcon from '../../assets/images/Mohan-muruge.jpg';

import './CommentForm.scss';

function CommentForm () {
    return(
      <section className="form">
        <div className="form__container">
          <div className="form__image">
          <UserImage className="form__image" src={UserIcon} image={UserIcon} />
          </div>
          <form className="form__content">
            <label className="form__title">JOIN THE CONVERSATION</label>
            <div className="form__flex-container">
              <textarea className="form__textarea" type="text" name="message" placeholder="That was easily the most spectacular BMX moment ever."></textarea>
              <button className="form__button">COMMENT</button>
            </div>
          </form>
        </div>
      </section>
    )
}

const UserImage = (props) => {
  return (
    <div className="form__image">
      <img className="form__image" src={props.image} alt="user's face"></img>
    </div>
  );
}

export default CommentForm;