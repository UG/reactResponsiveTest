import React from 'react';
import './App.css';
import pcsite from './pcsite.jsx'
import smartphone from './smartphon.jsx'

function App() {
  const [size, setSize] = React.useState({ 'width': window.innerWidth, 'height': window.innerHeight });
  window.addEventListener('resize', function () {
    setSize({ 'width': window.innerWidth, 'height': window.innerHeight });
  }, true);
  return (
    <div>
      {size.width > 375 * 2 ? pcsite() : smartphone()}
    </div>
  );
}

export default App;
