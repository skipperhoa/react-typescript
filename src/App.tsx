import React from 'react';
import './App.css';
import Cards from './components/cart/Carts';
import Counter from './components/counter/Counter';
import Item from './components/items/Item';
function App() {
  return (
    <div className="App">
      <h1>Basic React TypeScript</h1>
    {/*   <Item />  */}
     {/* <Counter /> */}
     <Cards />
    </div>
  );
}

export default App;
