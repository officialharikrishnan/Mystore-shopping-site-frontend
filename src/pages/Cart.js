import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-grid-system'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './Cart.css'
function Cart() {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch(`http://localhost:4000/get-cart`,{ 
            method: "GET",
            credentials: "include",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              }}).then((response)=>response.json())
              .then((json)=>{
                console.log(json);
                json.products.map((object) => {
                  setData((data) => [
                    ...data,
                    {
                      id: object._id,
                      Name: object.product.Name,
                      Price: object.product.Price,
                      Details: object.product.Details,
                      Image: object.product.image1
                    }
                  ]);
                });
              }

              )
  },[])
  console.log(data);
  const tableRows = data?.map(
    (element) =>
    (
      <div className='cards' >
        <Col md={5}>
        <div className="d-flex justify-content-start">
        <img id='image' src={`/uploads/${element.Image[0]}`} alt="" />

        </div>
        </Col>
        <Col md={7}>
        <div className="content">
        <h2 >{element.Name}</h2>
          <h5 >₹{element.Price}</h5>

        </div>
        </Col>


      </div>
    )

  )
  return (
    <div className='cart'>
      <Container>
        <Row  >
        
          {tableRows}
        </Row>

      </Container>

    </div>
  )
}

export default Cart