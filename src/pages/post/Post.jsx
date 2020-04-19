import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import {
  selectPost,
  selectFetchingPostById,
} from '../../redux/post/post-selector';
import { fetchPostById } from '../../redux/post/post-actions';
import { selectUsers } from '../../redux/user/user-selector';
import './post-style.scss';
import PostContainer from '../../components/PostContainer';

class Post extends Component {
  componentDidMount() {
    if (this.isCreateNewPost) return;
    this.props.fetchPostById(this.postId);
  }
  render() {
    this.postId = get(this, 'props.match.params.id', 0);
    this.isCreateNewPost = this.postId === 'new';
    const { selectedPost } = this.props;
    const title = this.isCreateNewPost
      ? 'New'
      : get(selectedPost, 'title', 'Not Found');
    return (
      <div className='post-page ui container'>
        <div className='ui grid'>
          <div className='sixteen wide column'>
            <div className='ui big breadcrumb'>
              <Link to='/' className='section'>
                Home
              </Link>
              <i className='right chevron icon divider'></i>
              <div className='active section'>Post</div>
              <i className='right chevron icon divider'></i>
              <div className='active section'>{title}</div>
            </div>
          </div>
          {!this.isCreateNewPost && selectedPost && (
            <PostContainer postId={this.postId} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  selectedPost: selectPost,
  isLoading: selectFetchingPostById,
  users: selectUsers,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPostById: (postId) => dispatch(fetchPostById(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
