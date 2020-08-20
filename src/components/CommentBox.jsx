import React, { useState } from 'react';
import { connect } from 'react-redux';
import { saveComments } from '../redux/actions/comments';
import requireAuth from './requireAuth';
const CommentBox = ({ saveComments }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    saveComments(comment);
    setComment('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a comment</h4>{' '}
      <textarea
        cols="30"
        rows="10"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  saveComments: (comment) => dispatch(saveComments(comment)),
});

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(requireAuth(CommentBox));
