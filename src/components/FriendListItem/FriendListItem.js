import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.li`
  min-width: 20rem;
  max-width: 40rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 1.4rem;
  background-color: snow;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
  margin-bottom: 1rem;
`;

const Status = styled.span`
  display: inline-block;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? '#19e320' : '#fc2b2b')};
`;

const Avatar = styled.img`
  margin-left: 1.4rem;
  border-radius: 0.6rem;
  width: 10rem;
`;

const Name = styled.p`
  font-family: var(--secondary-font);
  margin-left: 1.4rem;
  font-size: 3rem;
`;

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <ListItem>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="user Avatar" width="48" />
      <Name>{name}</Name>
    </ListItem>
  );
}

FriendListItem.defaultProps = {
  avatar: 'https://worldcup.com.ua/wp-content/uploads/2017/09/no-avatar-8.png',
  name: 'Anonymous',
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
