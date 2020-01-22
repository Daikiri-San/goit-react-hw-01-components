import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  width: 100%;
  display: flex;
`;

const ListText = styled.span`
  font-size: 1.3rem;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 0.4rem;
`;

const ListStats = styled.span`
  font-size: 1.6rem;
  font-family: var(--secondary-font);
`;

const ListItem = styled.li`
  width: 33.3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0rem;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #ebedf0;

  &:last-of-type {
    border-right: none;
    border-bottom-right-radius: 0.4rem;
  }

  &:first-of-type {
    border-bottom-left-radius: 0.4rem;
  }
`;

function Stats({ stats }) {
  const { followers, views, likes } = stats;
  const regexFix = /\d{1,3}(?=(\d{3})+(?!\d))/g;
  return (
    <List>
      <ListItem>
        <ListText>Followers</ListText>
        <ListStats>{followers.toString().replace(regexFix, '$&,')}</ListStats>
      </ListItem>
      <ListItem>
        <ListText>Views</ListText>
        <ListStats>{views.toString().replace(regexFix, '$&,')}</ListStats>
      </ListItem>
      <ListItem>
        <ListText>Likes</ListText>
        <ListStats>{likes.toString().replace(regexFix, '$&,')}</ListStats>
      </ListItem>
    </List>
  );
}

Stats.propTypes = {
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
export default Stats;
