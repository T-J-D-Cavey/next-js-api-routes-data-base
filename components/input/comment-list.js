import classes from './comment-list.module.css';

function CommentList(props) {
  const { comments } = props;
  return (
    <ul className={classes.comments}>
      {comments.map(comment => <li key={comment.key}>
        <p>{comment.text}</p>
        <h2>By: {comment.name}</h2>
      </li>)}
    </ul>
  );
}

export default CommentList;
