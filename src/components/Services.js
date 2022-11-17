import React from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Paper from '@mui/material/Paper';
import './Home.css';
import {Parallax} from 'react-parallax';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Footer from './Footer';
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

 

const Services = () => {

  return (
    <div>
      <Card>
      <CardActionArea >
      <Paper style={styles.paperContainer} className="fondo-services">
        <div style={styles.contenedorObj} >
                <Box sx={{ pl: 5, pr:5}} >Gashari Logistics & Transportation Company LLC 
                  </Box >
                  <Link to="/contact" >   <Button variant="contained" sx={{mt:3}} style={{backgroundColor:"#003784"}}>Contact</Button></Link>
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
    <Container>
      <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center', mt: 5  }}>
    <div className="subtitulo" style={{color:"#003784", fontWeight:"700", fontSize:"30px",marginBottom:"10px"}}>Services</div>
    <div className="titulo ">We offer a variety of <span className="resaltar">quality</span> services
</div>
    </Typography>
    <div className="divisor"> </div>
    <Grid container sx={{  p: 2 }} >
      <Grid item md={4} sm={12}  style={styles.superiorMargin} >
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={require('../assets/laptop.jpg')}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"  style={{textAlign:"center"}}>
          Inventory management.
          </Typography>
          <Typography variant="body2" color="text.secondary"  sx={{textAlign:"justify"}}>
          It is a warehouse operation that consists of managing the registration of products, the supply of merchandise and its dispatch. Inventory includes all the tangible goods that a company uses to manufacture or satisfy customer demand.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      </CardActions>
    </Card>
      </Grid>
      <Grid item md={4} sm={12} className="objeto">
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={require('../assets/distribution.jpg')}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"  style={{textAlign:"center"}}>
          Distribution
of Parcel
          </Typography>
          <Typography variant="body2" color="text.secondary"  sx={{textAlign:"justify"}}>
          We collect, transport and distribute your packages with certified door-to-door deliveries, efficiency and punctuality. We offer you through our services to keep you constantly informed about the current status of your packages in their distribution.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
      </CardActions>
    </Card>
      </Grid>
      <Grid item md={4} sm={12} className="objeto">
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={require('../assets/carga.jpg')}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center"}}>
          Light and Heavy Cargo Transportation
          </Typography>
          <Typography variant="body2" color="text.secondary"  sx={{textAlign:"justify"}}>In the cargo transport that we carry out, we take care of moving goods and merchandise from one place of origin to another of destination, in such a way that they reach their destination in good condition and within a pre-established period of time.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
   
      </CardActions>
    </Card>
      </Grid>
    </Grid>

   
   
    </Container>


    <Parallax className="parallax"  bgImage={require('../assets/avion.jpg')}  strength={400}>
      <Container>
        <Grid container sx={{  p: 2, mt:5, mb:5}}  display="flex"
  justifyContent="center">
   
          <div style={{display:"block", textAlign:"center", width: "100%"}}>
     <div className="titulo" style={{ fontSize: 40, color: "#fff", fontWeight:"600" }}>Safety and experience in transportation</div> 
         <div className="titulo titulo2" style={{ fontSize: 16, color: "#fff",marginTop:"15px",marginBottom:"10px"}}>We are characterized by responsibility and dedication to service in moving and transportation. Responsible and Honest Staff
</div> 
          </div>
          <Grid item md={4} sm={12}  className="item-imagen">
       <ImageList   sx={{  height: 250 }}  >
     
        <ImageListItem >
          <img
           src={require('../assets/time.jpg')}
           alt="asd"
           style={{height:"250px"}}
            loading="lazy"
          />
          <ImageListItemBar
            title="Attention in Flexible Hours"
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
    </ImageList>
    </Grid>
    <Grid item md={4} sm={12} className="item-imagen">
       <ImageList sx={{  height: 250 }}  >
     
        <ImageListItem >
          <img
           src={require('../assets/security.jpg')}
           alt="asd"
           style={{height:"250px"}}
            loading="lazy"
          />
          <ImageListItemBar
            title="Security and Trust"
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
    </ImageList>
    </Grid>
    <Grid item md={4} sm={12} className="item-imagen"  >
       <ImageList   sx={{  height: 250 }}  >
     
        <ImageListItem >
          <img
           src={require('../assets/coin.jpg')}
           style={{height:"250px"}}
           alt="asd"
            loading="lazy"
          />
          <ImageListItemBar
            title="Economic Costs"
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
    </ImageList>
    </Grid>
    </Grid>
    </Container>
    </Parallax>
  
    <Footer/>
    </div>
  )
} 

export default Services
