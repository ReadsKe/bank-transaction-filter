import React, { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionTable from './components/TransactionTable';
import Search from './components/search';
import DataFetch from './components/datafetch';

 function App() {
  const [search, setSearch] = useState('');
  const { data, loading } = DataFetch('http://localhost:3000/transactions');

  const addTransaction = (newTransaction) => {
    // adding a new transaction 
    const updatedData = [...data, { ...newTransaction, id: Date.now() }];
    setSearch(updatedData);
  };

  const filteredTransactions = data.filter((transaction) =>
    transaction.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div >
        <h1>Transaction Tracking App</h1>
        <div>
          <TransactionForm addTransaction={addTransaction} />
        </div>

          <div className='container' >
          <Search search={search} setSearch={setSearch} /> {
            loading
          }
          </div>
          
        <div className=' container col-md-6'>
        <h3>Transaction List</h3>
        <TransactionTable transactions={filteredTransactions} />
        </div>
    </div>

  );
}
export default App
