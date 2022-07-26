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
  let datas=[1,2,3]
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
               return setData((data) => [
                  ...data,
                  {
                    product:object.products
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

    // tablerow map

    const tableRows = data.map(
      (element,index) =>
      (
        <div >
  
          <Col md={12}>
            <div className="card" key={index} >
              <div className="card-image">
              <img id='image' src={`/uploads/${element.product[0].product.image1[0]}`} alt="" />
              </div>
              <h2>{element.product[0].product.Name}</h2>
              <h4>₹{element.product[0].product.Price}</h4>
  
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

          {tableRows ? tableRows : "no data"}
          </div>


        </Row>

      </Container>
    }
    </div>
  )
}

export default Cart