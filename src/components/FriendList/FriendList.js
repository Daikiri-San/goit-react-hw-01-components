import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  margin-bottom: 10rem;
`;

function FriendList({ friends }) {
  return (
    <List>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          isOnline={isOnline}
          name={name}
        ></FriendListItem>
      ))}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
    }),
  ),
};

export default FriendList;
