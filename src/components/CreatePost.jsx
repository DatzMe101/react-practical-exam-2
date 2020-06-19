import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';
import { selectSelectedUser } from '../redux/user/user-selector';
import { selectPostRequestStatus } from '../redux/post/post-selector';
import { setPost, setPostReset } from '../redux/post/post-actions';
import { REQUEST_STATUS } from '../constants/status';
import Input from '../shared/Input';
import TextArea from '../shared/TextArea';

class CreatePost extends Component {
  onSubmit(formValues) {
    const post = {
      ...formValues,
      userId: this.props.selectedUser.id,
    };
    this.props.setPost(post);
  }
  render() {
    const { handleSubmit, selectedUser, requestStatus } = this.props;
    const redirectToMain =
      !selectedUser ||
      !selectedUser.id ||
      requestStatus === REQUEST_STATUS.SUCCEED;
    if (redirectToMain) {
      this.props.resetSetPost();
      return <Redirect to='/' />;
    }
    const isLoading = requestStatus === REQUEST_STATUS.PROCESSING;
    return (
      <div data-testid='create-post' className='sixteen wide column'>
        <form
          onSubmit={handleSubmit((formValues) => this.onSubmit(formValues))}
          className='ui form error'
        >
          <Field name='title' component={Input} label='Title' />
          <Field name='body' component={TextArea} label='Body' />
          <button
            disabled={isLoading}
            className={`ui button primary ${isLoading ? 'loading' : ''}`}
            type='submit'
          >
            Post
          </button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if (!formValues.body) {
    errors.body = 'You must enter a body';
  }
  return errors;
};

const mapStateToProps = createStructuredSelector({
  selectedUser: selectSelectedUser,
  requestStatus: selectPostRequestStatus,
});

const mapDispatchToProps = (dispatch) => ({
  setPost: (post) => dispatch(setPost(post)),
  resetSetPost: () => dispatch(setPostReset()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'createPost',
    validate,
  })(CreatePost)
);
