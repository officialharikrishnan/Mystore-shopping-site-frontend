import React from 'react'
import { Container, Row, Col } from 'react-grid';
import './Homepage.css'
import Login from './Login'
function Homepage() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={4}>
            <div className="product">
              <div className="image-box">
                <div className="images" id="image-1" />
              </div>
              <div className="text-box">
                <h2 className="item">Orange</h2>
                <h3 className="price">$4.99</h3>
                <p className="description">A bag of delicious oranges!</p>
              
                <button type="button" name="item-1-button" id="item-1-button">Add to Cart</button>
              </div>
            </div>
          </Col>
          <Col md={4} >
            <div className="product">
              <div className="image-box">
                <div className="images" id="image-1" />
              </div>
              <div className="text-box">
                <h2 className="item">Orange</h2>
                <h3 className="price">$4.99</h3>
                <p className="description">A bag of delicious oranges!</p>
              
                <button type="button" name="item-1-button" id="item-1-button">Add to Cart</button>
              </div>
            </div>
          </Col>
          <Col md={4  }>
            <div className="product">
              <div className="image-box">
                <div className="images" id="image-1" />
              </div>
              <div className="text-box">
                <h2 className="item">Orange</h2>
                <h3 className="price">$4.99</h3>
                <p className="description">A bag of delicious oranges!</p>
               
                <button type="button" name="item-1-button" id="item-1-button">Add to Cart</button>
              </div>
            </div>
          </Col>
          <Col md={4} >
            <div class="product">
              <div class="image-box">
                <div class="images" id="image-2"></div>
              </div>
              <div class="text-box">
                <h2 class="item">Apple</h2>
                <h3 class="price">$4.99</h3>
                <p class="description">A bag of delicious apples!</p>
                
                  <button type="button" name="item-2-button" id="item-2-button">Add to Cart</button>
              </div>
            </div>
          </Col>
        </Row>

      </Container>


    </div>
  )
}

export default Homepage