import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-grid-system'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from '../Context/Context';
import { UserContext } from '../Context/UserContext';
import './Dashboard.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import 'react-awesome-slider/dist/styles.css';
import image from '../image/mobile-offers.jpeg'
function Dashboard() {

  const { setProductId } = useContext(ProductContext)
  const { setUserDetails } = useContext(UserContext)
  const [data, setData] = useState([]);
  const [slider, setSlider] = useState([])
  const [viewproduct, setViewproduct] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    fetch("/get-sliderimage", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((res) => res.json()).then((json) => {
      console.log(json);
      json.data.map((obj) => {
        setSlider((slider) => [
          ...slider,
          {
            id: obj
          }
        ])
      })
    })
    fetch("/user", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.status) {

          setUserDetails(json.userDatas);
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
        } else {
          navigate('/login')
        }
      });
  }, []);
  function handleViewproduct(id) {
    console.log(id);
    setProductId(id)
    navigate("/viewproduct")
    // navigate('/viewproduct')
    setViewproduct(true)
  }
  console.log(slider);


  const tableRows = data.map(
    (element) =>
    (
      <div >

        <Col md={12}>
          <div className="card" key={element._id} onClick={(e) => { handleViewproduct(element.id) }}>
            <div className="card-image">
              <img id='image' src={`/uploads/${element.Image[0]}`} alt="" />
            </div>
            <h5>{element.Name}</h5>
            <h6>₹{element.Price}</h6>

          </div>
        </Col>

      </div>
    )

  )

  return (
    <div className='main-page' >
      <Row>
        <Col md={12}>
          {slider &&
            <AliceCarousel autoPlay autoPlayInterval="3000" disableButtonsControls={true} infinite={true}>
              {slider[0] && <img src={`/uploads/${slider[0].id}`} className="sliderimg" />}
              {slider[1] && <img src={`/uploads/${slider[1].id}`} className="sliderimg" />}
              {slider[2] ? <img src={`/uploads/${slider[2].id}`} className="sliderimg" /> : ""}
              {slider[3] && <img src={`/uploads/${slider[3].id}`} className="sliderimg" />}
            </AliceCarousel>
          }
        </Col>
      </Row>
      <div className="product-page">

        <Container>
          <Row  >

            {tableRows}
          </Row>

        </Container>
      </div>
    </div>
  )

}

export default Dashboard