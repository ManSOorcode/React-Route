import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";

import CommentsList from "./CommentsList";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const param = useParams();

  const { quotesId } = param;

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(quotesId);
  }, [sendRequest, quotesId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addCommenthandler = useCallback(() => {
    sendRequest(quotesId);
  }, [sendRequest, quotesId]);

  let comments;

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }

  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className="centered"> No Comments were added yet! </p>;
  }

  // console.log(param);
  // console.log(quotesId);
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quotesId={quotesId}
          onAddedComment={addCommenthandler}
        />
      )}
      {comments}
    </section>
  );
};

export default Comments;
