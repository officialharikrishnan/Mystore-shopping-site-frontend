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
        if(json.status){
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
        }else{
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
          <MDBTable>
            {tableRows}
          </MDBTable>

        </Row>

      </Container>
    </div>
  )

}

export default Admin