import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { Container, Row, Col } from 'react-grid-system'
import './Homepage.css'

function Homepage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/home")
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
  console.log(data);

  const tableRows = data.map(
    (element) =>
    (
      <div >

        <Col md={12}>
          <div className="card">
            <Card >
              <h1>{element.Name}</h1>
              <p>${element.Price}</p>
              <p>{element.Image}</p>
              <Button>Buy now</Button>
            </Card>
          </div>
        </Col>

      </div>
    )

  )

  console.log(tableRows);
  return (
    <div>
      <Container>
        <Row  >
          {tableRows}
        </Row>

      </Container>
    </div>
  )

}

export default Homepage