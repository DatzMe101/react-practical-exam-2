import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUser } from '../../redux/user/user-actions';
import { selectSelectedUser } from '../../redux/user/user-selector';
import { fetchPostsPerUser } from '../../redux/post/post-actions';
import './member-detail-style.scss';

const MemberDetail = ({
  detail = {},
  onSelectUser,
  selectedUser,
  onFetchPostsPerUser,
}) => {
  const { id, name, companyName, image } = detail;
  const isActive = !!(selectedUser && selectedUser.id === id);
  const cardClass = `member-detail card cursor-pointer ${
    isActive ? 'active' : ''
  }`;
  const onSelectUserCard = () => {
    onSelectUser(detail);
    onFetchPostsPerUser(id);
  };
  return (
    <div
      data-testid='member-detail'
      className={cardClass}
      onClick={onSelectUserCard}
    >
      <div className='content'>
        <img
          className='right floated mini ui circular image'
          src={image}
          alt='Member Profile'
        />
        <div className='header'>{name}</div>
        <div className='meta'>{companyName}</div>
        <div className='arrow-left'></div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  selectedUser: selectSelectedUser,
});

const mapDispatchToProps = (dispatch) => ({
  onSelectUser: (user) => dispatch(selectUser(user)),
  onFetchPostsPerUser: (id) => dispatch(fetchPostsPerUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberDetail);
