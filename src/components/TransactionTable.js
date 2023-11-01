import React from 'react';

export default function TransactionTable({ transactions }) {
  return (
  <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Description</th>
      <th scope="col">Category</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>${transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
