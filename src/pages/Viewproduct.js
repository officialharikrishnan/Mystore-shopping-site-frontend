import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-grid-system'
import SimpleImageSlider from "react-simple-image-slider";
import './Viewproduct.css'
import axios from 'axios'
import { ProductContext } from '../Context/Context';
import {useNavigate} from "react-router-dom"
function Viewproduct() {
    const [product, setProduct] = useState("")
    const [imgId,setImgId]=useState("")
    const {productId} = useContext(ProductContext)
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:4000/viewoneproduct/${productId}`).then((response) => {
            // const data =  response.json();
            setProduct(response.data.product)
            setImgId(response.data.product.image1)
        })
    }, [])
    console.log(productId);
    const images=[
        {
            url : `/uploads/${imgId[0]}`
        },
        {
            url : `/uploads/${imgId[1]}`
        }
    ]
    const cartHandler = () =>{
        fetch(`http://localhost:4000/cart/${productId}`,{ 
            method: "GET",
            credentials: "include",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              }}).then((response)=>{

        })
    }
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
                    <button id='btnbuy' onClick={()=>{navigate("/summary")}}>Buy now</button>
                    <button id='btncart' onClick={cartHandler}>Add to cart</button>
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