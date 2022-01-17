import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <div className='trans_container'>
        <div className='trans_heading'>
          <h3>History</h3>
        </div>
        <div className='trans_list'>
          <ul className="list">
            {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
          </ul>
        </div>
      </div>
    </>
  )
}
