import React from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Home.css';
import './Contact.css';
import Image from '../assets/laptop.jpg';
import {Parallax} from 'react-parallax';
import Footer from './Footer';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
const styles = {
  paperContainer: {
      height: "100vh",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: '2rem',
  },
  contenedorObj: {
    display: 'block',
    width: '100%',
    textAlign: 'center',
    zIndex:"2"
  }
  }

 

const Contact = () => {


  return (
    <div>
      <Card>
      <CardActionArea >
      <Paper style={styles.paperContainer} className="fondo-contact">
        <div style={styles.contenedorObj} >
                <Box sx={{ pl: 5, pr:5}} >Gashari Logistics & Transportation Company LLC 
                  </Box >
                  <Link to="/contact" >    <Button variant="contained" sx={{mt:3}} style={{backgroundColor:"#003784"}}>Contact</Button></Link>
                </div>
            </Paper>
        
      </CardActionArea>
    
    </Card>  
    <div className="contenido-bottom" >
          <Typography gutterBottom variant="h5" component="div"  >
            About Us
          </Typography>
          <Typography variant="body2" color="text.whtie">
            <Container>
              <div className="descripcion">
              Gashari Logistics & Transportation Company LLC, provides moving and transportation services. After a few years, with the experience we had during that time, we were able to expand to provide you with a better and more complete service. Today we are one of the best Logistics Operators with more than 10 years of experience
</div></Container>
          </Typography>
        </div>
    <Container style={{display:"flex",justifyContent:"center"}}>
      <div >
      <div style={{display:"block",width:"100%"}}>
      <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center', mt: 5  }}>
    <div className="subtitulo" style={{color:"#003784", fontWeight:"700", fontSize:"30px",marginBottom:"10px"}}>Contact</div>
    <Typography gutterBottom variant="h6" component="div"  >
    We will contact you as soon as possible. Just leave us your information and queries with which we can help you.
          </Typography>
    </Typography>
    <div className="divisor"> </div>
    </div>


    <Box  style={{display:"block",width:"100%",marginTop:"30px"}}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '33%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{display:"flex",justifyContent:"center"}}>
        <TextField style={{width:"100%"}}
          label="Name"
          defaultValue="Name"
        />
        <TextField style={{width:"100%"}}
          label="Last Name"
          defaultValue="Last Name"
        />
      </div>
      <div style={{display:"flex",justifyContent:"center"}}>
      <TextField
          type="email" style={{width:"100%"}}
          label="Email"
          defaultValue="Email"
        />
          <TextField style={{width:"100%"}}
          type="number"
          label="Phone number"
          defaultValue="Phone number"
        />
      </div>
      <div style={{display:"flex",justifyContent:"center"}}>
      
          <TextField style={{width:"100%"}}
          label="Message"
          defaultValue="Message"
        />
      </div>
      <div style={{display:"flex",justifyContent:"center"}}>
      <Button variant="contained" sx={{mt:3,mb:1}} style={{backgroundColor:"#003784",width:"30%"}}>Send</Button>
      </div>
    </Box>
    </div>
   

   

   
    </Container>

    
    <Parallax   className="parallax" bgImage={Image}  strength={800}>
         <div style={{ height: 350 , paddingLeft: "30px", paddingRight: "30px",display:"flex", justifyContent:"Center", alignItems:"center"}}>
          <div style={{display:"block", textAlign:"center"}}>
         <div className="titulo" style={{ fontSize: 40, color: "#fff", fontWeight:"600" }}>Highly qualified staff</div> 
         <div className="titulo titulo3" style={{ fontSize: 15, color: "#fff",marginTop:"20px" }}>The experience and constant training of our technical staff are the pillars on which we<br/>  support the quality of the service we provide.</div> 
    <div className="divisor-white"> </div>
         </div>
       </div> 
    </Parallax>
   
    <Container>
    <Grid container sx={{  p: 2, mt:5, mb:5}} >
      <Grid item md={4} sm={12} className="textoizquierda">
      <Typography variant="h6"  gutterBottom style={{color:"#003784",fontWeight:"bold"}}>
      TRANSPORTATION COMPANY
    </Typography>
    <Typography variant="h4" sx={{my:2}} style={{fontWeight:"bold"}} gutterBottom  >
    We provide full range global logistics solution
    </Typography>
    <Typography variant="h5" gutterBottom component="div" style={{textAlign:"justify",color:"#003784"}} >
    You can take your freight & logistics needs with a personal approach with us
    </Typography>
    <Typography gutterBottom component="div" style={{textAlign:"justify"}} sx={{mt:3}}>
    We transport all types of cargo locally and nationally with high safety and quality standards.

    </Typography>
      </Grid>
      <Grid item md={4} sm={12} className="contenedor-imagen"style={{display:"flex",justifyContent:"center",margin:"auto",paddingLeft:"40px"}}>
        <div style={{display:"block", textAlign:"center"}}>
        <img style={{width:"650px",height:"360px"}} 
            alt="asd" 
            className="imagen6"
              src={require('../assets/truck.jpg')}
            />
            
    </div>
      </Grid>
    </Grid>
    </Container>
    <Footer/>
    </div>
  )
} 

export default Contact
