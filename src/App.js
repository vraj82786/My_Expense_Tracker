import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

export default function App() {
  return (
    <GlobalProvider>
      <div className='main_container'>
        <div className="heading">
          <Header />
        </div>
        <div className="main_div">
          <Balance />
          <IncomeExpenses />
        </div>
        <div className="container">
          <AddTransaction />
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  );
}
