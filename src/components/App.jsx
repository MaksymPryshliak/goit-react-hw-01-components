import React from 'react';
import { Profile } from './profile/Profile';
import { Statistics } from './stats/Statistics';
import { FriendsList } from './friends/FriendsList';
import { TransactionHistory } from './transactions/TransactionHistory';
import user from '../components/profile/user.json';
import data from '../components/stats/data.json';
import friends from '../components/friends/friends.json';
import transactions from '../components/transactions/transactions.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendsList friends={friends} /> 
      <TransactionHistory items={transactions} />
    </div>
  );
};
