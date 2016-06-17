import React from 'react';
import Sidebar from './Sidebar';

export default function App(props) {
  return (
    <div className='app'>
      <Sidebar />
      { props.children }
    </div>
  );
};
