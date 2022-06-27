import React, { useEffect } from 'react'
import './Viewproduct.css'
import axios from 'axios'
function Viewproduct(props) {
    useEffect(()=>{
        axios.get(`http://localhost:4000/viewoneproduct/${props.proId}`).then((response)=>{
            // const data =  response.json();
            console.log(response.data);
        })
    },[])



    console.log(props.proId);
  return (
    <div className='viewproduct'>

    </div>
  )
}

export default Viewproduct