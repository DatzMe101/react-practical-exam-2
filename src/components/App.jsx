import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { fetchUsers } from '../redux/user/user-actions';
import { PATH_NAME, DEFAULT_PATH_NAME } from '../constants/routes';
import Home from '../pages/home/Home';
import Post from '../pages/post/Post';
import DeletePost from './delete-post/DeletePost';
import NotFound from './NotFound';
import './style.scss';

class App extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={PATH_NAME.HOME} component={Home} />
          <Route path={PATH_NAME.POST_WITH_ID} component={Post} />
          <Route path={PATH_NAME.DELETE_POST_WITH_ID} component={DeletePost} />
          <Route path={PATH_NAME.NOT_FOUND} component={NotFound} />
          <Redirect to={DEFAULT_PATH_NAME}></Redirect>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(null, mapDispatchToProps)(App);
