import './styles.css';
import { getComments, getCurrentUser } from '../../api/api';
import Comment from './Comment/Comment';
import { useEffect, useState } from 'react';


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


const CommentContainer = () => {
  const [comments, setComments] = useState();
  const [commentsLoading, setCommentsLoading] = useState(true);
  // const [commentStructure]
  useEffect(() => {
    // Simulates fetch() requests
    async function foo() {
      await sleep(100);
      setComments(getComments());
      setCommentsLoading(false);
    }
    foo();
  }, []);
  // useEffect(() => {
  //   setComments(comments);
  // }, [comments])


  function removeComment(commentId) {
    // console.log(`CommentId: ${commentId} | Comments: ${comments}`);
    // console.log(comments);
    // return;
    // let newComments = c
    _removeComment(commentId, comments);
    console.log('Romoving comments...');
    console.log(comments)
    setComments(comments);
    console.log('Comments werre removed');
    console.log(comments)

  }

  function _removeComment(commentId, comments) {
    if (typeof (comments) !== "object") {
      console.log('Error: Invalid JSON object 1');
      return false;
    }
    if(comments.length === 0) {
      return false;
    }

    if (commentId < 0) {
      console.log('Error: Comment Id not set');
      return false;
    }

    let searchedIndex = -1;
    for (const [index, comment] of comments.entries()) {
      if (typeof (comment) !== "object") {
        console.log('Error: invalid JSON')
        return false;
      }
      if (commentId === comment.id) {
        console.log(`Comment to remove is on index: ${index} | ID ${comment.id}`);
        searchedIndex = index
        break;
      }
      if (_removeComment(commentId, comment.replies)) {
        return true;
      }
    }

    if (searchedIndex !== -1) {
      console.log(`deleting comment on index: ${searchedIndex}`);
      // delete comments[searchedIndex];
      comments.splice(searchedIndex, 1)
      return true;
    }
    return false;
  }

  let currentUser = getCurrentUser().username;

  function getCommentStructure(comments, isRoot = false) {
    if (typeof (comments) !== "object" || comments.length === 0) {
      return;
    }

    let children = comments.map((comment) =>
        <div className="comments__wrapper" key={(comment.id).toString()}>
          <Comment
            key={(comment.id).toString()}
            data={comment}
            currentUser={currentUser}
            handleRemove={removeComment}
          />
          <div
            className="children"
            >
            {getCommentStructure(comment.replies, false)}
          </div>
        </div>
    )
    
    if(children.length === 0) {
      return;
    }
    if (isRoot) {
      console.log(comments.length);
      return (
        <div className="comment-container text-neutral-gray-400 text-base">
          {children}
        </div>
      )
    }
    return (
      <>
        {children}
      </>
    )
  }

  if(commentsLoading) {
    return <h1 className="loading">Loading comments</h1>
  }
  console.log('rendeeeeeeeeeeeer')
  console.log(comments);
  return (
    <div className="flex flex-col gap-4 text-neutral-gray-400 text-base">
      {getCommentStructure(comments, true)}
    </div>
  )
}

export default CommentContainer;



