import React from 'react';
import  Navbar  from './Component/Navbar';
import ProductCard from "./Component/ProductCard"

const App = () => {
  return (
    <div>
      <h1 className='blue'>This is React Application</h1>
      
      <Navbar />
      <ProductCard
      name="S25"
      price="1224455"
      brand="Samsung"
       />
       
      <ProductCard
      name="S26"
      price="1228899"
      brand="Samsung"
       />
      <ProductCard
      name="S27"
      price="1228899"
      brand="Samsung"
       />
    </div>
  )
}
export default App;
