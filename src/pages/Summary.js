import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../Context/Context'
import { Container, Row, Col } from 'react-grid-system'
import './Summary.css'
function Summary() {
  const { productId } = useContext(ProductContext)
  const [image, setImage] = useState()
  const [product, setproduct] = useState("")
  const [count, setCount] = useState(1)
  const [totalPrice,setTotalPrice]=useState()
  useEffect(() => {
    axios.get(`/viewoneproduct/${productId}`).then((res) => {

      setImage(res.data.product.image1[0])
      setproduct(res.data.product)
      setTotalPrice(res.data.product.Price)

    })
  }, [])
  const addCountHandler = () => {
    setCount(count + 1);
    console.log("count",count);
  };
  const removeCountHandler = () => {
    if(count === 1){
      return;  
    }
    setCount(count - 1);
    console.log("count",count);

  };
  return (
    <div className='summary'>
      <Container>
        <Row>
          <Col md={6}>
            <img id='image' src={`/uploads/${image}`} alt="" />

          </Col>
          <Col md={6}>
            <div className="product-details">
              <h4>{product.Name}</h4>
              <div className="quantity">
                <button className='qty' onClick={removeCountHandler}>-</button><h6 className='qty1'>{count-1}</h6>
                <button className='qty' onClick={addCountHandler}>+</button>

              <h7>Total Price : {totalPrice}</h7>
              </div>
            </div>
          </Col>
        </Row>
      </Container>


    </div>
  )
}

export default Summary