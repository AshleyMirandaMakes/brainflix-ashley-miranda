import CommentForm from '../CommentForm/CommentForm';

function Comments (props) {
    return(
      <section className="comment">
          <h3 className="comment__title">3 Comments</h3>
          <CommentForm videoDetails={props.videoDetails.comments}/>
          <ul className="comment__container">
          {props.videoDetails.comments.map((commentObj) => ( 
            <li className="comment__card">
            <div className="comment__image"></div>
            <div className="comment__content">
              <h4 className="comment__content--top">{commentObj.name}</h4>
              <h4 className="comment__content--top">{commentObj.timestamp}</h4>
            </div>
            <p className="comment__comment">{commentObj.comment}</p>
            </li>
          ))}
          </ul>
      </section>
    )
  }

export default Comments;