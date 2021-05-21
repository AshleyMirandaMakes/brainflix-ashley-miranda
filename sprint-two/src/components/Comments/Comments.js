import CommentForm from '../CommentForm';
//import NumericMonthDayYearConverter from '../Functions/TimeFunctions';

import './Comments.scss';

function Comments (props) {
console.log(props.videoComments)
    return(
      <section className="comment">
          <h3 className="comment__title">3 Comments</h3>
          <CommentForm/>
        
         {/* <ul className="comment__container">
          {props.videoComments.map((comment) => ( 
            <li className="comment__card" key={comment.id}>
            <div className="comment__image"></div>
            <div className="comment__content">
              <div className="comment__content--top">
                <h4 className="comment__name">{comment.name}</h4>
                <h4 className="comment__timestamp">{NumericMonthDayYearConverter(comment.timestamp)}</h4>
              </div>
              <p className="comment__comment">{comment.comment}</p>
            </div>
            </li>
          ))} 
          </ul> */}
      </section>
    )
  }

//why does it keep breaking upon reload up there? should I add state to just this component?
export default Comments;