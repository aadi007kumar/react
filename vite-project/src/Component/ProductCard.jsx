import React from 'react'
const ProductCard = (props) => {
  return (
    <div>
        <p>{props.name}</p>
        <p>{props.price}</p>
        <p>{props.brand}</p>
    </div>
  )
}
export default ProductCard;
