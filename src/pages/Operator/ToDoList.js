import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import Layout from '../../components/Layout/Layout'
export default function ToDoList() {
  return (
    <Layout>
 
    <div style={{width:"250px",height:"750px"}}>
            <h1>Operator Page</h1>
           <Button > <Link to="/appointments-list">View pending appointments</Link></Button>
           <Button ><Link to="*">Delete appointments</Link></Button>
           <Button > <Link to="*">View Doctor's timings</Link></Button>
            <Button ><Link to="*">Modify Doctor's timings</Link></Button>
            <Button ><Link to="*">Cancel appointments</Link></Button>
            
        </div>

    </Layout>
  )
}
