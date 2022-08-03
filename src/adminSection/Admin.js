import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-grid-system'
import { useNavigate } from 'react-router-dom'
import { AdminContext } from '../Context/Admin';
import { ProductContext } from '../Context/Context';
import './Admin.css'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';


function Admin() {

  const { setProductId } = useContext(ProductContext)
  const { setAdmin } = useContext(AdminContext)
  const [data, setData] = useState([]);
  const [submitStatus,setSubmitStatus]=useState(false)
  const [sliderimg1, setSliderimg1] = useState()
  const [sliderimg2, setSliderimg2] = useState()
  const [sliderimg3, setSliderimg3] = useState()
  const [sliderimg4, setSliderimg4] = useState()

  const [viewproduct, setViewproduct] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    fetch(`/admin/admin`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.status) {
          setAdmin(true)
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
          navigate("/adminDashboard/admin-login")
        }
      });
  }, []);
  function handleViewproduct(id) {
    console.log(id);
    setProductId(id)
    navigate("/adminDashboard/updateproduct")
    // navigate('/viewproduct')
    setViewproduct(true)
  }
  function handleDeleteproduct(id) {
    axios.get(`/admin/deleteproduct/${id}`).then((response) => {
      console.log(response);
      if (response.status) {
        window.location.reload()
      } else {
        alert("somthing wrong")
      }
    })
  }
  function imagehandler(e) {

      setSliderimg1(e.target.files[0]);
      setSliderimg2(e.target.files[1]);
      setSliderimg3(e.target.files[2]);
      setSliderimg4(e.target.files[3]);


  }
  const sliderimgUploadhandler =async (e) => {
    e.preventDefault()
    const formData= new FormData()
    formData.append("image1",sliderimg1)
    formData.append("image1",sliderimg2)
    formData.append("image1",sliderimg3)
    formData.append("image1",sliderimg4)
    // console.log(formdata.get("imageone"));
    fetch("admin/sliderimage", {
        method: 'POST',
        body: formData,
       
    })
        .then((res) => {
        if(res.status){
          setSubmitStatus(true)
        }
        })
        .catch((err) => ("Error occured", err));

  }

  const tableRows = data.map(
    (element) =>
    (
      <div >

        <Col md={12}>

          <MDBTableBody>
            <tr>

              <td><img id='product-image' src={`/uploads/${element.Image[0]}`} alt="" /></td>
              <td>{element.Name}</td>
              <td>{element.Details}</td>
              <td>₹{element.Price}</td>
              <td><button id='edit' onClick={(e) => { handleViewproduct(element.id) }}>Edit</button></td>
              {/* <td><button id='delete' onClick={(e) => { handleDeleteproduct(element.id) }} >Delete</button></td> */}
            </tr>
          </MDBTableBody>
        </Col>

      </div>
    )

  )
  return (
    <div className='page' >
      <div id="heading"> <h2>All products</h2></div>

      <Container>
        <Row  >
          <Col md={8}>
            <div className="product-section">
              <MDBTable>
                {tableRows}
              </MDBTable>
            </div>
          </Col>
          <Col md={4}>
            <div className="slider-editer">
              <form onSubmit={sliderimgUploadhandler}>
                
              <div className="file-input">
                <input type="file" name='image1' multiple onChange={e => imagehandler(e)} />
                <span className="button">Choose</span>
                <span className="label" data-js-label>Select files </span>
                </div>
              {sliderimg1 && <div>{submitStatus ? <button type='submit' className='slider-upload-success' >Done</button> :<button type='submit' className='slider-upload' >Submit</button>}</div>}

              </form>
              <br />
              <div className="img1">

              <img src={sliderimg1 && URL.createObjectURL(sliderimg1)} alt="" />
              <br />
              <img src={sliderimg2 && URL.createObjectURL(sliderimg2)} alt="" />
              <br />
              <img src={sliderimg3 && URL.createObjectURL(sliderimg3)} alt="" />
              <br />
              <img src={sliderimg4 && URL.createObjectURL(sliderimg4)} alt="" />
              </div>
            </div>
          </Col>


        </Row>

      </Container>
    </div>
  )

}

export default Admin