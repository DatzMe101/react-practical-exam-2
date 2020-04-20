import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link, withRouter } from 'react-router-dom';
import { get } from 'lodash';
import Swal from 'sweetalert2';
import PostDetail from '../post-detail/PostDetail';
import Loader from '../Loader';
import {
  selectPost,
  selectFetchingPostById,
  selectDeletePostRequestStatus,
} from '../../redux/post/post-selector';
import {
  fetchPostById,
  deletePost,
  deletePostReset,
} from '../../redux/post/post-actions';
import { REQUEST_STATUS } from '../../constants/status';
import './delete-post-style.scss';

class DeletePost extends Component {
  componentDidMount() {
    this.postId = parseInt(get(this, 'props.match.params.id', 0), 10);
    if (!this.postId) return;
    this.props.fetchPostById(this.postId);
  }
  onDeletePost() {
    this.props.deletePost(this.postId);
  }
  onSuccessPostDelete() {
    Swal.fire({
      icon: 'success',
      title: 'Deleted Successfully',
      text: 'Your post already delete',
    }).then(() => {
      this.props.deletePostReset();
      this.props.history.push('/');
    });
  }
  render() {
    const { isLoading, selectedPost, deleteRequestStatus } = this.props;
    const loading =
      isLoading || deleteRequestStatus === REQUEST_STATUS.PROCESSING;
    const loadingText = isLoading ? 'Loading Post' : 'Deleting Post';
    const isSuccessful = deleteRequestStatus === REQUEST_STATUS.SUCCEED;
    if (isSuccessful) {
      this.onSuccessPostDelete();
    }
    return (
      <Loader isLoading={loading} loaderText={loadingText}>
        {selectedPost && (
          <div className='delete-post'>
            <div className='post-item-container'>
              <h2 className='ui header'>Delete Post</h2>
              <PostDetail post={selectedPost}>
                <div className='extra content'>
                  <div className='ui two buttons'>
                    <Link to='/' className='ui basic button'>
                      Cancel
                    </Link>
                    <div
                      className='ui basic red button'
                      onClick={() => this.onDeletePost()}
                    >
                      Delete
                    </div>
                  </div>
                </div>
              </PostDetail>
            </div>
          </div>
        )}
      </Loader>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  selectedPost: selectPost,
  isLoading: selectFetchingPostById,
  deleteRequestStatus: selectDeletePostRequestStatus,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPostById: (postId) => dispatch(fetchPostById(postId)),
  deletePost: (postId) => dispatch(deletePost(postId)),
  deletePostReset: () => dispatch(deletePostReset()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DeletePost)
);
