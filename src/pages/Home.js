import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";
import { Button,colors,Box} from "@mui/material";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Clinic Website</h1>
          <p>Best services</p>
          <Link to="/signin">
            <button>Book Appointment</button>
          </Link>
        </div>
        </div>
        
      <div align="center" style={{flexDirection:'row'}}>
      <h1>Doctors Panel</h1>
        
        <div style={{flex:"1 1 30%"}}>
       <h3> Dr.Venu</h3>
        <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" width="350" height="250"/>
       
        </div>
        <div style={{flex:"2 2 30%"}}>
        <h3>Dr.Neha</h3>
        <img src="https://media.istockphoto.com/id/1398828096/photo/portrait-of-a-young-indian-doctor-wearing-a-stethoscope-sitting-in-a-office-writing-a.jpg?b=1&s=170667a&w=0&k=20&c=fNdTEAw5B_gj38mP4lxfj_PMALGz_scFnmcUrOMQ8kg=" width="350" height="250"/>
        </div>
        <div style={{flex:"3 3 30%"}}>
        <h3>Dr.Shyam</h3>
        <img src="https://media.istockphoto.com/id/1455610161/photo/portrait-of-a-senior-black-doctor-looking-at-the-camera.jpg?b=1&s=170667a&w=0&k=20&c=Rx_K2yJm4kZaizKkJsy75ii3gV7pr_Pl3u787Z9k1QM=" width="350" height="250"/> 
        
        </div>

      
      </div>
      <div align="center"> 
        <h1></h1>
        <img src="https://img.freepik.com/premium-vector/personal-doctor-appointment-2d-vector-isolated-illustration-visit-professional-health-facility-flat-characters-cartoon-background-getting-treatment-plan-symptoms-conditions-colourful-scene_151150-5797.jpg?w=360"/>
        <h3 align="center"> <br/>
          </h3>
      </div>
      
        </Layout>
    
  );
};

export default Home;