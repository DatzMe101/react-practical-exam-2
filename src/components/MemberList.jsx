import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUsers } from '../redux/user/user-selector';
import MemberDetail from './member-detail/MemberDetail';

const MemberList = ({ users = [] }) => {
  const renderUsers = () => {
    const renderedUserList = users.reduce((accum, user) => {
      return accum.concat(<MemberDetail key={user.id} detail={user} />);
    }, []);
    return renderedUserList;
  };
  return (
    <div data-testid='member-list' className='member-list ui cards'>
      {renderUsers()}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  users: selectUsers,
});

export default connect(mapStateToProps)(MemberList);
