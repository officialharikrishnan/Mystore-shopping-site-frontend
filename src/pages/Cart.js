import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-grid-system'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './Cart.css'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
function Cart() {
  const [data, setData] = useState([])
  const { setUserDetails } = useContext(UserContext)
  const [cartitem, setCartitem] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    fetch(`/get-cart`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.status) {
          if (json.cartItems) {
            setUserDetails(json.sessionData)
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
              ])
            })
          } else {
            setCartitem(true)
            setUserDetails(json.sessionData)
          }
        } else {
          navigate('/login')
        }
      }

      )
  }, [])
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
    <div>{cartitem ? <div className='empty-cart'><h5>No products</h5></div> :
      <Container>
        <Row  >
          <div className="cart">

          {tableRows}
          </div>


        </Row>

      </Container>
    }
    </div>
  )
}

export default Cart