import React, { useState } from 'react'
import { Container, Row, Col } from 'react-grid';
import Axios from 'axios'
import './Addproduct.css'
import axios from 'axios';
function Addproduct() {
  const [productName, setProductName] = useState()
  const [productDetails, setProductDetails] = useState()
  const [productPrice, setProductPrice] = useState()
  const [image1,setImage1]=useState()
  const [image2,setImage2]=useState()



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
    const files1=e.target.files[0]
    const files2=e.target.files[1]


      // console.log(files1);
      // console.log(files2);
      setImage1(files1)
      setImage2(files2)
    }
    console.log(image1);
    console.log(image2);
  function componentDidMount(e) {
    e.preventDefault()
    const data=new FormData();
    data.append("Name",productName);
    data.append("Details",productDetails);
    data.append("Price",productPrice);
    data.append("image1",image1)
    data.append("image1",image2)

    
    axios.post('/admin/addproduct',data).then(res=>{console.log(res);})
    
  }
  return (
    <div className='addproduct'>

      <Container>
        <Row>
          
          <Col md={6}>
            <div className="productform">
              <form onSubmit={componentDidMount} enctype="multipart/form-data">
                <input onChange={handleProductName} type="text" placeholder='Product name' />
                <input onChange={handleProductDetails} type="text" placeholder='discription' />
                <input onChange={handleProductPrice} type="number" placeholder='price' /> <br />
                <input type="file" name='Image' multiple accept='.jpg' onChange={e=>handleProductImage(e)}/>
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