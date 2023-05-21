import React from 'react'
import { Button } from '@mui/material'
import {Link} from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
export default function Profile() {
  return (
    <Layout>
    <div style={{width:"250px",height:"750px"}}>
    <h1>Doctor Page</h1>
   <Button > <Link to="*">View pending appointments</Link></Button>
   <Button ><Link to="*">View completed appointments</Link></Button>
   <Button > <Link to="*">Attend appointment</Link></Button>
   
</div>
</Layout>
  )
}
