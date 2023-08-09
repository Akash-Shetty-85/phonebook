import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className='card'>
      <Header/>
      <div className='content'>
      <button className='button'>Add</button>
      <div className='card-content heading-container '>
        <span className='name content-info'>Name</span><br/>
        <span className='number content-info'>Phone</span>
      </div>
      </div>
    </div>
   );
}

export default App;
