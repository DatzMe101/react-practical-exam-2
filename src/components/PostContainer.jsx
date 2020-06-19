import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PostDetail from './post-detail/PostDetail';
import Loader from './Loader';
import CommentList from './CommentList';
import PostAuthor from './PostAuthor';
import {
  selectPost,
  selectFetchingPostById,
} from '../redux/post/post-selector';
import { selectUsers } from '../redux/user/user-selector';

const PostContainer = ({ isLoading, selectedPost, users, postId }) => {
  const currentUser = users.find((user) => user.id === selectedPost.userId);
  return (
    <Loader isLoading={isLoading} loaderText='Loading Post'>
      <div data-testid='post-container' className='eight wide column'>
        {selectedPost && (
          <PostDetail post={selectedPost}>
            {currentUser && <PostAuthor user={currentUser} />}
          </PostDetail>
        )}
      </div>
      <div className='eight wide column'>
        <CommentList postId={postId} />
      </div>
    </Loader>
  );
};
const mapStateToProps = createStructuredSelector({
  selectedPost: selectPost,
  isLoading: selectFetchingPostById,
  users: selectUsers,
});

export default connect(mapStateToProps)(PostContainer);
