import React, { useState, useEffect } from 'react';
import './customers.css';

function Customers() {

  const [state, setState] = useState({ customers: []});

  useEffect(() => {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => setState({customers}, () => console.log('Customers fetched...', customers)));
  }, []);

  return (
    <div>
      <h2>Customers</h2>
      <ul>
      {state.customers.map(customer =>
        <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
      )}
      </ul>
    </div>
  );
}

export default Customers;
