import './CommentForm.scss';

function CommentForm () {
    return(
      <section className="form">
        <div className="form__container">
          <div className="form__image"></div>
          <form className="form__content">
            <label className="form__title">JOIN THE CONVERSATION</label>
            <textarea className="form__textarea" type="text" name="message" placeholder="That was easily the most spectacular BMX moment ever."></textarea>
            <button className="form__button">COMMENT</button>
          </form>
        </div>
      </section>
    )
}
  
//no props here?

export default CommentForm;