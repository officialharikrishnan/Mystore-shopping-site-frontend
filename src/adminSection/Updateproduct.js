import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-grid';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Updateproduct.css'
import { ProductContext } from '../Context/Context';
import { AdminContext } from '../Context/Admin';
function Updateproduct() {
  const Navigate = useNavigate()
  const {setAdmin} = useContext(AdminContext)
  const { productId } = useContext(ProductContext)
  const [oldimgId,setoldimgId]=useState()
  const [productName, setProductName] = useState()
  const [productDetails, setProductDetails] = useState()
  const [productPrice, setProductPrice] = useState()
  const [image1, setImage1] = useState()
  const [image2, setImage2] = useState()
  const [color, setColor] = useState()
  const [errorStatus, setErrorStatus] = useState()
  useEffect(()=>{
    setAdmin(true)
    fetch(`/admin/getproduct/${productId}`,{credentials: "include",method: "GET",headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }}).then((response)=>
      response.json()
    ).then((json)=> {
      setoldimgId(json.product.image1)
      setProductName(json.product.Name)
      setProductPrice(json.product.Price)
      setProductDetails(json.product.Details)
    })
  },[])


// console.log(oldimgId);
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
  console.log(oldimgId);
  const componentDidMount = async (e) => {
    e.preventDefault()
    const data = new FormData();
    data.append("id",productId)
    data.append("oldimageid",oldimgId[0])
    data.append("Name", productName);
    data.append("Details", productDetails);
    data.append("Price", productPrice);
    data.append("image1", image1);
    data.append("image1", image2);


    axios.post('/admin/editproduct',data).then(res=>{
      console.log(res.data.status);
      setErrorStatus(res.data.status)
      if(res.data.status===true){
        setColor("btn btn-success")
        Navigate("/adminDashboard")
      }else{
        console.log(errorStatus);
        alert(errorStatus)

      }
    })


  }
  return (
    <div className='addproduct'>

      <Container>
        <Row>

          <Col md={6}>
            <div className="productform">
              <h4>Update Product</h4>
              <form onSubmit={componentDidMount}>
                <input onChange={handleProductName} type="text" value={productName} placeholder='Product name' />
                <input onChange={handleProductDetails} type="text" value={productDetails} placeholder='discription' />
                <input onChange={handleProductPrice} type="number" value={productPrice} placeholder='price' /> <br />
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