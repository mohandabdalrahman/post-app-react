import React from 'react';
import { connect } from 'react-redux';
const CommentList = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment, index) => (
        <li key={index}>{comment}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = ({ comments }) => ({ comments });

export default connect(mapStateToProps, null)(CommentList);
