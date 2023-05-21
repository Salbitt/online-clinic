import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import Layout from '../../components/Layout/Layout'
export default function Profile() {
  return (
    <Layout>
    <div style={{width:"250px",height:"750px"}}>
    <h1>Patient Page</h1>
   <Button > <Link href="/appointments">View upcoming appointments</Link></Button>
   <Button ><Link href="/appointments">View past appointments</Link></Button>
   <Button > <Link href="/appointments">View pending payments</Link></Button>
    <Button ><Link href="/appointments">Cancel Appointment</Link></Button>
    
</div>
</Layout>
  )
}
