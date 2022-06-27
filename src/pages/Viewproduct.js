import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-grid-system'
import SimpleImageSlider from "react-simple-image-slider";
import './Viewproduct.css'
import axios from 'axios'
function Viewproduct(props) {
    const [product, setProduct] = useState("")
    const [imgId,setImgId]=useState("")
    
    useEffect(() => {
        axios.get(`http://localhost:4000/viewoneproduct/${props.proId}`).then((response) => {
            // const data =  response.json();
            setProduct(response.data.product)
            setImgId(response.data.product.image1)
        })
    }, [])
    console.log(imgId);
    const images=[
        {
            url : `/uploads/${imgId[0]}`

        },
        {
            url : `/uploads/${imgId[1]}`

        }
    ]
    return (
        <div className='viewproduct'>
            <Container>
                <Row>
                    <Col md={6}>
                        <SimpleImageSlider
                            width={375}
                            height={225}
                            images={images}
                            showBullets={true}
                            showNavs={true}
                            slideDuration={0.5}
                            startIndex={0}
                        />
                    </Col>
                    <Col md={6}>
                    <h2>{product.Name}</h2>
                    <h3>${product.Price}</h3>
                    <button id='btnbuy' >Buy now</button>
                    <button id='btncart'>Add to cart</button>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <section className='details'>
                        <h4>Product Details</h4>
                            <h6>{product.Details}</h6>
                        </section>
                    </Col>
                    <Col>
                        <section className='star-rating'>
                            
                        </section>
                    </Col>
                </Row>
            </Container>
        </div>
    );

}

export default Viewproduct