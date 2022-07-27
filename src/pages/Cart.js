import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-grid-system'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import './Cart.css'
import image from '../image/empty-cart.svg'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
function Cart() {
  const [data, setData] = useState([])
  const { setUserDetails } = useContext(UserContext)
  const [cartitem, setCartitem] = useState()
  const navigate = useNavigate()
  let datas = [1, 2, 3]
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
                  product: object.products,
                  quantity: object.quantity
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
  function handleViewproduct(id) {
    console.log(id);
  
  }

  // tablerow map

  const tableRows = data.map(
    (element, index) =>
    (
      <div >


          <div className="card" onClick={(e) => { handleViewproduct(element.product[0]._id) }}>
        <Col md={6}>
            <img id='image' src={`/uploads/${element.product[0].product.image1[0]}`} alt="" />
        </Col>
        <Col md={6}>
        </Col>
            <h3>{element.product[0].product.Name}</h3>
            <h4>₹{element.product[0].product.Price}</h4>
            <h6>Qty. {element.quantity}</h6>

          </div>

      </div>
    )

  )
  console.log(data);
  return (
    <div>{cartitem ? <div className='empty-cart'><img src={image} alt="" /> <br /><h6>No products</h6></div> :


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