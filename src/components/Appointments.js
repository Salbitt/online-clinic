import React from 'react'
import Layout from './Layout/Layout'
import { Button } from '@mui/material'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
export default function Appointments() {
  const handleClick=(e)=>{
    Swal.fire({
      icon:'success',
      title:'Appointment booked'
    })
  }
  return (
    <Layout>
        <div align="center" style={{height:"750px"}}>
            <h1> Booking Appointment:</h1>
            
                <h2>Enter appointment details:</h2>
                <form name='appointment-enter'>
                    Reason for Appointment: <input type='text' required name='reason'/><br></br>
                    Preffered Appointment timings: <input type='text' required name='timings'/><br></br>
                    Email: <input type='text' required name='email'/>
                </form>
              <Button variant='contained'onClick={handleClick}>Book Appointment</Button>
        </div>
    </Layout>
  )
}
