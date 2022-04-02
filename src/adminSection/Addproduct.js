import React, { useState } from 'react'
import { Container, Row, Col } from 'react-grid';
import Axios from 'axios'
import './Addproduct.css'
function Addproduct() {
  const [productName, setProductName] = useState()
  const [productDetails, setProductDetails] = useState()
  const [productPrice, setProductPrice] = useState()
  const [image,setImage]=useState()


  function handleProductName(e) {
    setProductName(e.target.value)
  }
  function handleProductDetails(e) {
    setProductDetails(e.target.value)
  }
  function handleProductPrice(e) {
    setProductPrice(e.target.value)
  }
  function handleProductImage(e){
    console.log(e.target.files[0]);
    setImage(e.target.files[0])

    console.log(e.target.value);
  }
  function componentDidMount(e) {
    e.preventDefault()
    const data=new FormData();
    data.append("Name",productName);
    data.append("Details",productDetails);
    data.append("Price",productPrice);
    data.append("image",image)

    
    Axios.post("/admin/addproduct",data).then(res=>{
      console.log(res);
    })
    
  }
  return (
    <div className='addproduct'>

      <Container>
        <Row>
          
          <Col md={6}>
            <div className="productform">
              <form onSubmit={componentDidMount} >
                <input onChange={handleProductName} type="text" placeholder='Product name' />
                <input onChange={handleProductDetails} type="text" placeholder='discription' />
                <input onChange={handleProductPrice} type="number" placeholder='price' /> <br />
                <input type="file" name='Image' accept='.jpg' onChange={handleProductImage}/>
                <button type="submit" id='btn'>Submit</button>
              </form>

            </div>

          </Col>
          <Col md={6}>
            



          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Addproduct