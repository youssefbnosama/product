import './App.css';
import Navbar from './component/Navbar';
import Product from './component/Product';
import { useContext, useState } from 'react';
import { context } from './component/Navbar';
function App() {
  const [arr,setArr] = useState([])
  return (
    <context.Provider value={[arr,setArr]} >
    <div className="App">
      <Navbar />
      <hr className='hr'/>
      <Product />
    </div>
    </context.Provider>
  );
}

export default App;
