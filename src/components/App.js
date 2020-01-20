import React from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendsList from './FriendList';
import TransactionHistory from './TransactionHistory';
import user from '../user.json';
import statisticalData from '../statistical-data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import '../base.css';

function App() {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendsList friends={friends}></FriendsList>
      <TransactionHistory items={transactions}></TransactionHistory>
    </>
  );
}

export default App;
