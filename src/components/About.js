import React from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Paper from '@mui/material/Paper';
import './Home.css';
import './About.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
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

 

const About  = () => {

  return (
    <div>
      <Card>
      <CardActionArea >
      <Paper style={styles.paperContainer} className="fondo-about">
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
    <Grid container sx={{  p: 2, mt:5, mb:5}} >
      <Grid item md={6} sm={12} className="textoizquierda">
    <Typography variant="h4" sx={{my:2}} style={{color:"#003784",fontWeight:"bold"}} gutterBottom  >
    Misión
    </Typography>
    <Typography gutterBottom component="div" style={{textAlign:"justify"}} sx={{mt:3}}>
    Provide high-quality logistics and transportation solutions to increase the competitiveness of our clients and satisfy them with professionalism through our comprehensive services to foreign trade.
    </Typography>
    <Typography variant="h4" sx={{mb:2, mt:4}} style={{color:"#003784",fontWeight:"bold"}} className="vision" gutterBottom  >
    Visión
    </Typography>
    <Typography gutterBottom component="div" style={{textAlign:"justify"}} sx={{mt:3}}>
    We see ourselves as a first-rate enterprise, recognized by our clients for the excellence of our services and the capacity of our people.
We aspire to consolidate ourselves as a benchmark in logistics and transportation, leaders in all areas of foreign trade in which we operate.
We seek to offer our people a work environment that they can feel proud of; To this end, we constantly work on actions aimed at encouraging their human and professional development.
    </Typography>
      </Grid>
      <Grid item md={6} sm={12} className="contenedor-imagen"style={{paddingLeft:"40px"}}>
        <div style={{display:"block"}}>
        <Typography variant="h4" sx={{mb:2, mt:2}} style={{color:"#003784",fontWeight:"bold"}} className="valores" gutterBottom  >
        Valores
       </Typography>
    <Typography gutterBottom component="div" style={{textAlign:"justify"}}>


    <List sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper' }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText style={{textAlign:"justify"}} primary="Trabajo honesto y profesional" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText style={{textAlign:"justify"}} primary="Crecimiento y mejora continua en base a dos pilares: innovación y creatividad" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText style={{textAlign:"justify"}} primary="Compromiso con el éxito de nuestros clientes, prestando especial atención a sus requerimientos específicos"  />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText style={{textAlign:"justify"}} primary="Orientación de los objetivos individuales de nuestra gente en el marco de los objetivos globales de la organización"  />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText style={{textAlign:"justify"}} primary="Respeto por la sociedad y el medio ambiente de cada lugar donde nos toque operar."  />
        </ListItem>
      </List>
   
    </Typography>
    </div>
      </Grid>
    </Grid>
    </Container>
    <Footer/>
    </div>
  )
} 

export default About
