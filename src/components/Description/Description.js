import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Avatar = styled.img`
  width: 12rem;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 3rem;
`;

const DescriptionBlock = styled.div`
  text-align: center;
  padding: 4rem 4rem 0rem 4rem;
`;

const Name = styled.p`
  font-size: 2rem;
  font-family: var(--secondary-font);
  margin-bottom: 0.6rem;
`;

const Tag = styled.p`
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 0.8rem;
`;

const Location = styled.p`
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 4rem;
`;

function Description({ name, tag, location, avatar }) {
  return (
    <DescriptionBlock>
      <Avatar src={avatar} alt="user avatar" />
      <Name>{name}</Name>
      <Tag>@{tag}</Tag>
      {location && <Location>{location}</Location>}
    </DescriptionBlock>
  );
}

Description.defaultProps = {
  name: 'Anonymous',
  avatar: 'https://worldcup.com.ua/wp-content/uploads/2017/09/no-avatar-8.png',
  location: '',
};

Description.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
};

export default Description;
