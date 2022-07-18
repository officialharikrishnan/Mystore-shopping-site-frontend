import React, { useContext, useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { Container, Row, Col } from 'react-grid-system'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from '../Context/Context';
import './Homepage.css'

function Homepage() {

  const { setProductId } = useContext(ProductContext)
  const [data, setData] = useState([]);
  const [viewproduct, setViewproduct] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    fetch("http://localhost:4000/",{ 
      method: "GET",
      credentials: "include",
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }})
      .then((response) => response.json())
      .then((json) => {
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
      });
  }, []);
  function handleViewproduct(id) {
    console.log(id);
    setProductId(id)
    navigate("/viewproduct")
    // navigate('/viewproduct')
    setViewproduct(true)
  }

  const tableRows = data.map(
    (element) =>
    (
      <div >

        <Col md={12}>
          <div className="card" key={element._id} onClick={(e) => { handleViewproduct(element.id) }}>
            <img id='image' src={`/uploads/${element.Image[0]}`} alt="" />
            <h2>{element.Name}</h2>
            <h4>₹{element.Price}</h4>

          </div>
        </Col>

      </div>
    )

  )

  return (
    <div className='page' >
      <Container>
        <Row  >
        
          {tableRows}
        </Row>

      </Container>
    </div>
  )

}

export default Homepage