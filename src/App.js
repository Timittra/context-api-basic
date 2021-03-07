import React, { createContext, useState } from 'react'; 
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';
import './App.css';

// step 1 declare context and call createContext()
// step 2, import createContext
// step 3, use CategoryContext.Provider
// step 4, export context so that other component can read this value
// step 7, passing value can be hard coded or dynamic, value='laptop'
// step 9, we can pass array as a value, like in header instead of  setCount={setCount} props [count, setCount] array
// step 11, declare state for the purpose of Context, line 18
export const CategoryContext = createContext();


// 1, useState('laptop'), next header.js
function App() {
  // const [count, setCount] = useState(0);
  // const [category, setCategory] = useState(0);
  const [category, setCategory] = useState('laptop');
  
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <p>Count value: {category}</p>
     <Header></Header>
     <Home count={category}></Home>
     <Shipment></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;
