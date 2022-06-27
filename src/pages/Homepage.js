import React, { useEffect, useState } from 'react'
import { Button, Card, Image } from 'react-bootstrap';
import { Container, Row, Col } from 'react-grid-system'
import {useNavigate} from 'react-router-dom'
import './Homepage.css'
import Viewproduct from './Viewproduct';

function Homepage() {
  const [data, setData] = useState([]);
  const [viewproduct,setViewproduct]=useState(false)
  const [proId,setProId]=useState("")
  const navigate=useNavigate()
  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((response) => response.json())
      .then((json) => {
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
   function handleViewproduct(id){
      console.log(id);
      setProId(id)
      // navigate('/viewproduct')
      setViewproduct(true)
   }

  const tableRows = data.map(
    (element) =>
    (
      <div >

        <Col md={12}>
          <div onClick={(e)=>{handleViewproduct(element.id)}} className="card">
            <Card >
              <img src={`/uploads/${element.Image[0]}`} style={{ maxWidth: '16rem', margin:'15px' }} alt="" />
              <h1>{element.Name}</h1>
              <p>${element.Price}</p>
              <p>{element.Image[0]}</p>
              <Button>Buy now</Button>
            </Card>
          </div>
        </Col>

      </div>
    )

  )

  return (
    <div>
      {viewproduct ? <Viewproduct proId={proId}/> :
        <Container>
        <Row  >
          {tableRows}
        </Row>

      </Container>}
    </div>
  )

}

export default Homepage