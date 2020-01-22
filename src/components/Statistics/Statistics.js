import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function randomHexColor() {
  const hexColor = Math.floor(Math.random() * 16777215).toString(16);
  const result = hexColor.length === 5 ? `#0${hexColor}` : `#${hexColor}`;
  return result;
}

const StatisticsBlock = styled.section`
  display: inline-block;
  margin-left: 50%;
  transform: translateX(-50%);
  text-align: center;
  background-color: snow;
  border-bottom-right-radius: 0.4rem;
  border-bottom-left-radius: 0.4rem;
  margin-bottom: 10rem;
`;

const Title = styled.title`
  display: inline-block;
  background-color: snow;
  font-size: 2.2rem;
  font-family: var(--secondary-font);
  padding: 2.2rem;
  color: rgba(0, 0, 0, 0.7);
`;

const List = styled.ul`
  min-width: 21rem;
  max-width: 56rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 7rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  background-color: ${props => props.color};

  &:last-of-type {
    border-bottom-right-radius: 0.4rem;
  }

  &:first-of-type {
    border-bottom-left-radius: 0.4rem;
  }
`;

const ListText = styled.span`
  font-size: 1.2rem;
  margin-bottom: 0.4rem;
  color: snow;
`;

const ListStats = styled.span`
  font-size: 1.6rem;
  color: snow;
`;

function Statistics({ title, stats }) {
  return (
    <StatisticsBlock>
      {title && <Title>{title.toUpperCase()}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => (
          <ListItem key={id} color={randomHexColor()}>
            <ListText>{label}</ListText>
            <ListStats>{percentage}%</ListStats>
          </ListItem>
        ))}
      </List>
    </StatisticsBlock>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  statisticalData: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      persentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
