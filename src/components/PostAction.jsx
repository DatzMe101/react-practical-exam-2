import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { deletePost, deletePostReset } from '../redux/post/post-actions';
import { selectDeletePostRequestStatus } from '../redux/post/post-selector';
import { PATH_NAME } from '../constants/routes';
import { REQUEST_STATUS } from '../constants/status';

class PostAction extends Component {
  state = {
    showDeleteAlert: false,
  };
  render() {
    const onShowDeleteConfirmation = () => {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will not able to recover it once deleted',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it',
      }).then(({ value }) => {
        if (!value) return;
        this.props.deletePost(postId);
      });
    };
    const onShowDeleteSuccess = () => {
      Swal.fire({
        title: 'Deleted Successfully',
        text: 'Congratulation you delete the post',
        icon: 'success',
      }).then(() => {
        this.props.deletePostReset();
      });
    };
    const { postId, deleteRequestStatus } = this.props;
    const isDeleteSuccessful = deleteRequestStatus === REQUEST_STATUS.SUCCEED;
    if (isDeleteSuccessful) {
      onShowDeleteSuccess();
    }
    return (
      <div className='extra content'>
        <Link
          className='ui blue basic button'
          to={`${PATH_NAME.POST}${postId}`}
        >
          View
        </Link>
        <button
          type='button'
          className='ui red basic button'
          onClick={() => onShowDeleteConfirmation()}
        >
          Delete
        </button>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  deleteRequestStatus: selectDeletePostRequestStatus,
});
const mapDispatchToProps = (dispatch) => ({
  deletePost: (postId) => dispatch(deletePost(postId)),
  deletePostReset: () => dispatch(deletePostReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostAction);
