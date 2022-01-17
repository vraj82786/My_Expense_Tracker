import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <div className='form_container'>
        <div className='form_heading'>
          <h3>New Transaction</h3>
        </div>
        <div className='form_div'>  
          <form onSubmit={onSubmit}>
              <label htmlFor="text">Text</label>
              <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
              <label htmlFor="amount">Amount</label>
              <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
              <button className="btn">Add transaction</button>
          </form>
        </div>
      </div>
    </>
  )
}
