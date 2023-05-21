import React from 'react'
import Layout from './Layout/Layout'
import { Button } from '@mui/material'
import {Link} from 'react-router-dom'
export default function Appointments() {
  return (
    <Layout>
        <div align="center" style={{height:"750px"}}>
            <h1> Booking Appointment:</h1>
            
                <h2>Enter appointment details:</h2>
                <form name='appointment-enter'>
                    Reason for Appointment: <input type='text' required name='reason'/><br></br>
                    Preffered Appointment timings: <input type='text' required name='timings'/><br></br>
                    Mobile number: <input type='text' required name='mobile'/>
                </form>
              <Button><Link href="*">Book Appointment</Link></Button>
        </div>
    </Layout>
  )
}
