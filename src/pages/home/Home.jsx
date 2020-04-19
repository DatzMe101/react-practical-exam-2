import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  selectSelectedUser,
  selectLoading,
} from '../../redux/user/user-selector';
import MemberList from '../../components/MemberList';
import PostList from '../../components/post-list/PostList';
import Loader from '../../components/Loader';
import './home-style.scss';

const Home = ({ isLoading }) => {
  return (
    <div className='home-page ui container'>
      <Loader isLoading={isLoading} loaderText='Loading'>
        <div className='ui grid'>
          <div className='eight wide column'>
            <MemberList />
          </div>
          <div className='eight wide column'>
            <PostList />
          </div>
        </div>
      </Loader>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  selectedUser: selectSelectedUser,
  isLoading: selectLoading,
});

export default connect(mapStateToProps)(Home);
