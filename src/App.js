import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  let sub = [
    {
      id: 1,
      name: 'Akash',
      phone: '1234567890'
    },
    {
      id: 2,
      name: 'V Akash',
      phone: '8521234567'
    }
  ]
  const deletHandler=()=>{
    alert('clicked');
  }
  return (
    <div className='card'>
      <Header heading="phone  directory" />
      <div className='content'>
        <button className='button'>Add</button>
        <div className='card-content heading-container '>
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>
        {
          sub.map(sub => {
            return (
              <div className='card-content' key={sub.id}>
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span className="grid-item action-btn-container">
                <button className="custom-btn delete-btn" onClick={deletHandler}>Delete</button>
                </span>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
