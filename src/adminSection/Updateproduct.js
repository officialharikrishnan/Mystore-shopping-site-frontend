import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-grid';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Updateproduct.css'
import { ProductContext } from '../Context/Context';
function Updateproduct() {
  const Navigate = useNavigate()
  const { productId } = useContext(ProductContext)
  const [productName, setProductName] = useState()
  const [productDetails, setProductDetails] = useState()
  const [productPrice, setProductPrice] = useState()
  const [image1, setImage1] = useState()
  const [image2, setImage2] = useState()
  const [btnStatus, setBtnStatus] = useState()
  const [color, setColor] = useState()
  const [errorStatus, setErrorStatus] = useState()
  // useEffect(()=>{
  //   fetch(`/admin/getproduct/${productId}`,{credentials: "include",method: "GET",headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   }}).then((response)=>
  //     response.json()
  //   ).then((json)=> console.log(json))
  // })



  function handleProductName(e) {
    setProductName(e.target.value)
  }
  function handleProductDetails(e) {
    setProductDetails(e.target.value)
  }
  function handleProductPrice(e) {
    setProductPrice(e.target.value)
  }
  function handleProductImage(e) {
    const files1 = e.target.files[0]
    const files2 = e.target.files[1]


    setImage1(files1)
    setImage2(files2)
  }
  console.log(image1);
  const componentDidMount = async (e) => {
    e.preventDefault()
    const data = new FormData();
    data.append("Name", productName);
    data.append("Details", productDetails);
    data.append("Price", productPrice);
    data.append("file", image1);
    data.append("image1", image2);


    try {
      const res = await axios.post('/admin/updateproduct', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

    } catch (err) {

    }


  }
  return (
    <div className='addproduct'>

      <Container>
        <Row>

          <Col md={6}>
            <div className="productform">
              <h4>Update Product</h4>
              <form onSubmit={componentDidMount}>
                <input onChange={handleProductName} type="text" placeholder='Product name' />
                <input onChange={handleProductDetails} type="text" placeholder='discription' />
                <input onChange={handleProductPrice} type="number" placeholder='price' /> <br />
                <input type="file" name='Image' multiple accept='.jpg' onChange={e=>handleProductImage(e)}/>
                {/* <button type="submit" className={color} >Submit{btnStatus}</button> */}
                {color ? <button id='btnn' type='submit' className={color}>submitted</button> : <button id='btnnn' type='submit'>Submit</button>
                }
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

export default Updateproduct