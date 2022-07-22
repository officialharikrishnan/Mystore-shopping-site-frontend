import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-grid-system'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import './Allusers.css'
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../Context/Admin';
function Allusers() {
    const [userData, setUserData] = useState([])
    const navigate = useNavigate()
    const {setAdmin} = useContext(AdminContext)
    useEffect(() => {
        fetch('/admin/getallusers', {
            credentials: "include", method: "GET", headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response) => response.json()).then((json) => {
            if(json.status){
                setAdmin(true)
                if (json.users) {
                    json.users.map((object) => {
                        setUserData((userData) => [
                            ...userData, {
                                id: object._id,
                                name: object.name,
                                phone: object.phone,
                                address: object.address
                            }
                        ])
                    })
                }
            }else{
                navigate("/adminDashboard/admin-login")
            }
        }
        )

    }, [])
    const userRow = userData.map(
        (element) => (
            <div className='tables'>
                <Col md={12}>

                    <MDBTableBody>
                        <tr>
                            <td>Name : {element.name}</td>
                        </tr>
                        <tr>
                            <td>Phone : {element.phone}</td>

                        </tr>
                        <tr>
                            <td>Address : {element.address}</td>

                        </tr>
                    </MDBTableBody>
                </Col>

            </div>
        )
    )
    return (
        <div className='all-users'>
            <Container>
                <Row  >
                    <MDBTable>
                        {userRow}
                    </MDBTable>

                </Row>

            </Container>

        </div>
    )
}

export default Allusers