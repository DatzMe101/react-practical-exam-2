import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { selectSelectedUser } from '../../redux/user/user-selector';
import {
  selectPostsPerUser,
  selectFetchingPostsPerUser,
} from '../../redux/post/post-selector';
import { PATH_NAME } from '../../constants/routes';
import PostDetail from '../post-detail/PostDetail';
import NoPostAvailable from '../no-post-available/NoPostAvailable';
import PostAction from '../PostAction';
import Loader from '../Loader';
import './post-list-style.scss';

const PostList = ({
  selectedUser,
  postsPerUser = [],
  isLoadingPost = false,
}) => {
  if (!selectedUser) return <NoPostAvailable />;
  const { name, image } = selectedUser;
  const renderPostsPerUser = () => {
    const post = postsPerUser.reduce((accum, post) => {
      return accum.concat(
        <PostDetail key={post.id} post={post}>
          <PostAction postId={post.id} />
        </PostDetail>
      );
    }, []);
    return post;
  };
  return (
    <div data-testid='post-list' className='post-list'>
      <h2 className='ui header'>
        <img className='ui avatar image' src={image} alt='Member Avatar' />
        {name} Posts
      </h2>
      <Link
        data-testid='new-post'
        to={`${PATH_NAME.POST}new`}
        className='ui green button btn-new'
      >
        Create New Post
      </Link>
      <Loader isLoading={isLoadingPost} loaderText='Loading Posts'>
        <div className='ui cards'>{renderPostsPerUser()}</div>
      </Loader>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  selectedUser: selectSelectedUser,
  postsPerUser: selectPostsPerUser,
  isLoadingPost: selectFetchingPostsPerUser,
});

export default connect(mapStateToProps)(PostList);
