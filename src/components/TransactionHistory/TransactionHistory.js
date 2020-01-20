import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  min-width: 70%;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-bottom: 10rem;
  border-top-left-radius: 0.6rem;
  border-top-right-radius: 0.6rem;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);
`;

const THeadTH = styled.th`
  width: 33.3%;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 1.8rem;
  font-weight: 500;
  color: snow;
  background-color: #13c9ed;
  border-right: 0.1rem solid snow;
  padding: 1.8rem;

  &:first-of-type {
    border-top-left-radius: 0.6rem;
  }

  &:last-of-type {
    border-top-right-radius: 0.6rem;
    border-right: none;
  }
`;

const TBodyTR = styled.tr`
  background-color: snow;

  &:last-of-type {
    border-bottom-right-radius: 0.6rem;
    border-bottom-left-radius: 0.6rem;
  }

  &:nth-of-type(even) {
    background-color: #e1e7e8;
  }
`;

const TBOdyTD = styled.td`
  text-transform: capitalize;
  font-weight: 300;
  font-size: 1.6rem;
  color: rgba(0, 0, 0, 0.6);
  width: 33.3%;
  text-align: center;
  border: 0.1rem solid #d0d8d9;
  padding: 2rem;
`;

function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <tr>
          <THeadTH>Type</THeadTH>
          <THeadTH>Amount</THeadTH>
          <THeadTH>Currency</THeadTH>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TBodyTR key={id}>
            <TBOdyTD>{type}</TBOdyTD>
            <TBOdyTD>{amount}</TBOdyTD>
            <TBOdyTD>{currency}</TBOdyTD>
          </TBodyTR>
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
