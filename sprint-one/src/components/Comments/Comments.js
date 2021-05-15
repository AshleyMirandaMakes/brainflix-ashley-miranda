import CommentForm from '../CommentForm/CommentForm';
import NumericMonthDayYearConverter from '../Functions/TimeFunctions';

import './Comments.scss';

function Comments (props) {

    return(
      <section className="comment">
          <h3 className="comment__title">3 Comments</h3>
          <CommentForm videoDetails={props.videoDetails.comments}/>
          <ul className="comment__container">
          {props.videoDetails.comments.map((commentObj) => ( 
            <li className="comment__card" key={commentObj.id}>
            <div className="comment__image"></div>
            <div className="comment__content">
              <div className="comment__content--top">
                <h4 className="comment__name">{commentObj.name}</h4>
                <h4 className="comment__timestamp">{NumericMonthDayYearConverter(commentObj.timestamp)}</h4>
              </div>
              <p className="comment__comment">{commentObj.comment}</p>
            </div>
            </li>
          ))}
          </ul>
      </section>
    )
  }

export default Comments;