import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function randomHexColor() {
  const hexColor = Math.floor(Math.random() * 16777215).toString(16);
  const result = hexColor.length === 5 ? `#0${hexColor}` : `#${hexColor}`;
  return result;
}

const StatisticsBlock = styled.section`
  max-width: 30%;
  display: flex;
  flex-direction: column;
  margin-left: 50%;
  transform: translateX(-50%);
  justify-content: center;
  align-items: center;
  background-color: snow;
  border-bottom-right-radius: 0.4rem;
  border-bottom-left-radius: 0.4rem;
  margin-bottom: 10rem;
`;

const Title = styled.title`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: snow;
  font-size: 2.2rem;
  font-weight: 500;
  padding: 2.2rem;
  color: rgba(0, 0, 0, 0.7);
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  flex-basis: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  font-weight: 300;
  margin-bottom: 0.4rem;
  color: snow;
`;

const ListStats = styled.span`
  font-size: 1.6rem;
  color: snow;
`;

function Statistics({ title, stats }) {
  const hasTitle = title;
  return (
    <StatisticsBlock>
      {hasTitle && <Title>{title.toUpperCase()}</Title>}

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
