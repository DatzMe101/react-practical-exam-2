import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectComments,
  selectFetchingCommentsByPostId,
} from '../redux/comment/comment-selector';
import { fetchCommentsByPostId } from '../redux/comment/comment-actions';
import CommentDetail from './CommentDetail';
import Loader from './Loader';

class CommentList extends Component {
  componentDidMount() {
    if (!this.props.postId) return;
    this.props.fetchCommentsByPostId(this.props.postId);
  }
  renderComments() {
    const { comments = [] } = this.props;
    const renderedComments = comments.reduce((accum, comment) => {
      return accum.concat(<CommentDetail key={comment.id} comment={comment} />);
    }, []);
    return renderedComments;
  }
  render() {
    return (
      <Loader isLoading={this.props.isFetchingComments}>
        <div className='ui comments'>
          <h3 className='ui dividing header'>Comments</h3>
          {this.renderComments()}
        </div>
      </Loader>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  comments: selectComments,
  isFetchingComments: selectFetchingCommentsByPostId,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCommentsByPostId: (postId) => dispatch(fetchCommentsByPostId(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
