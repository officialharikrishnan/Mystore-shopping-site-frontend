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
                    <Col>
                        <SimpleImageSlider
                            width={600}
                            height={300}
                            images={images}
                            showBullets={true}
                            showNavs={true}
                        />
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );

}

export default Viewproduct