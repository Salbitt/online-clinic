import React,{Component} from 'react'
import PatientDetails from './PatientDetails'

import { Button,colors,Box} from "@mui/material";
import {Link} from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
const admin_page =()=>{
   
    return(
        <Layout>
        <div style={{width:"250px",height:"750px"}}>
            <h1>Admin Page</h1>
           <Button > <Link to="/patient-details">View patient Records</Link></Button>
           <Button ><Link to="/appointments-list">View appointments</Link></Button>
           <Button > <Link to="/doctor-details">View Doctors</Link></Button>
            <Button ><Link to="*">Delete Doctors</Link></Button>
            <Button ><Link to="*">View Operators</Link></Button>
            <Button><Link to="*">Delete Operators</Link></Button>
        </div>
        </Layout>
    )
}

export default admin_page