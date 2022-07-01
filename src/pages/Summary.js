import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../Context/Context'
import './Summary.css'
function Summary() {
  const {productId} = useContext(ProductContext)
  useEffect(()=>{
    axios.get(`http://localhost:4000/viewoneproduct/${productId}`).then((res)=>{
      console.log(res.data);


      function sum(){
        let result=res.data.product.Price
        console.log(result);
      }
      sum()
    })
  })
  return (
    <div className='summary'>


    </div>
  )
}

export default Summary