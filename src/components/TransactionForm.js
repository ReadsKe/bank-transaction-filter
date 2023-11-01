import React, { useState } from 'react';

export default function TransactionForm() {
  const [formData, setFormData] = useState({ description: '', category: '', amount: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    postFormtoJson(formData);
  };

  const postFormtoJson = (formData) => {
    fetch('http://localhost:3000/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
         .then((res) => res.json())
         .then((res) => {
            console.log(res); 
          })
  };

  return (
    <form >
      <input type="text" name="description" placeholder="Enter Description" required value={formData.description} onChange={handleInputChange} />
      <input type="text" name="category"  placeholder="Category" required value={formData.category}  onChange={handleInputChange} />
      <input type="number" name="amount" placeholder="Amount" required value={formData.amount} onChange={handleInputChange} />
      <button type="submit" className='btn btn-success' onSubmit={handleSubmit}>Add Transaction</button>
    </form>
  );

  
}

