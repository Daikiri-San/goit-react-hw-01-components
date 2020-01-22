import React from 'react';
import Stats from '../Stats';
import Description from '../Description';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProfileBlock = styled.div`
  max-width: 30rem;
  margin: 0 auto;
  margin-top: 4rem;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  background-color: snow;
  border-radius: 0.4rem;
  margin-bottom: 10rem;
`;

function Profile({ user }) {
  const { name, tag, location, avatar, stats } = user;

  return (
    <ProfileBlock>
      <Description name={name} tag={tag} location={location} avatar={avatar} />
      <Stats stats={stats} />
    </ProfileBlock>
  );
}

Profile.propTypes = {
  user: PropTypes.exact({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object.isRequired,
  }),
};

export default Profile;
