import React from 'react'
const ProductCard = (props) => {
  return (
    <div>
        <p>{props.name}</p>
        <p>{props.price}</p>
        <p>{props.brand}</p>
        <h1> I am a new product</h1>
    </div>
  )
}
export default ProductCard;
