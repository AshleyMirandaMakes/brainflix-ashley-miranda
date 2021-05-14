function CommentForm () {
    return(
      <section className="form">
        <div className="form__container">
          <div className="form__image"></div>
          <form className="form__content">
            <label className="form__title">JOIN THE CONVERSATION</label>
            <input className="form__input" type="text" name="message" placeholder="That was easily the most spectacular BMX moment ever."></input>
            <button className="form__button">COMMENT</button>
          </form>
        </div>
      </section>
    )
}
  
//no props here?

export default CommentForm;