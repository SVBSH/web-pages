import logo from 'assets/images/avatars/image-amyrobson.png';
import { useState } from "react";


const Comment = ({data, currentUser, handleRemove}) => {
  const [pupularityAmount, setPupularityAmount] = useState(data.score);
  const [reply, setReply] = useState(false);
  console.log(reply);
  currentUser = 'amyrobson'
  const handlePopularity = operation => e => {
    if (operation === "+") {
      setPupularityAmount(pupularityAmount + 1);
    } else if (operation === "-") {
      setPupularityAmount(pupularityAmount - 1);
    }
  }
  
  const userImgPath =  require('assets/images/avatars/image-amyrobson.png').default;
  return (
    <article className="comment rounded-xl">

      <div className="comment__popularity rounded-xl">
        <button className="btn popularity__btn" onClick={handlePopularity("+")}>+</button>
        <p
          className="popularity__amount"
        >
          {pupularityAmount}
        </p>
        <button className="btn popularity__btn" onClick={handlePopularity("-")}>-</button>
      </div>

      <div className="comment__info flex flex-row">
        <img src={logo} alt="Comment author" className="comment__img" />
        <div className="comment__author font-bold text-neutral-blue-900">{data.user.username}</div>
        {(currentUser === data.user.username) && (
          <div className="comment__tags">
            {/* TODO: transform button to link */}
            <button className="
            comment__tag 
            btn
            font-bold
            bg-primary-violet-900
            text-neutral-white-400
            ">
              You
            </button>
          </div>
        )}
        <p className="comment__last-modification">
          {data.createdAt}
        </p>
      </div>

      <div className="comment__control">

        {(currentUser === data.user.username) ?
          <>
            <button
              className="
                btn
                comment__btn
                comment__remove-btn
                text-primary-red-400
              "
              onClick={() => {handleRemove(data.id)}}
            >
              Remove
            </button>
            <button
              className="
                        btn
                        comment__btn
                        comment__reply-btn
                        text-primary-violet-900
              "
              onClick={() => setReply(!reply)}
            >
              Edit
            </button>

          </>
          :
          <button
            className="
          btn
          comment__btn
          comment__reply-btn
          text-primary-violet-900
          "
            onClick={() => setReply(!reply)}
          >
            Reply
          </button>
        }
      </div>

      <p className="comment__text text-neutral-gray-400 font-medium">
        {data.content}
      </p>

    </article>
  )
}

export default Comment;
