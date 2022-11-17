
import React from 'react';
import '../App.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Fab from '@mui/material/Fab';
import { Link } from "react-router-dom";
const Footer = () => {
    return(
<div>
  <div className="background-footer" >
  
    <div >
    <Container> 
  <Grid container sx={{p: 2, pt:4, pb:4}} >

<Grid item md={4} sm={12}  style={{display:"flex", alignContent: "center", alignItems: "center"}}>
 
<Grid item md={3} sm={12} style={{display:"flex", justifyContent:"start"}}>
<Fab className="icon-social" disabled aria-label="like" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} >
        <InboxIcon style={{ color: "white" }}  />
      </Fab>
</Grid>
<Grid item md={7} sm={12} >
<Typography variant="h7" style={{display:"block",color:"white"}}>Phone</Typography>
<Typography  sx={{mt:1}}style={{display:"block", fontSize:"14px" ,color:"white"}}>
+ (571) 5871129
</Typography>
</Grid>
</Grid>



<Grid item md={4} className="social-container" sm={12} style={{display:"flex", alignContent: "starts", alignItems: "center"}}>
<Grid item md={3} sm={12} style={{display:"flex", justifyContent:"start"}}>
<Fab  className="icon-social" disabled aria-label="like" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} >
        <InboxIcon style={{ color: "white" }}  />
      </Fab>
</Grid>
<Grid item md={9} sm={12} >
<Typography variant="h7" style={{display:"block",color:"white"}}>Address</Typography>
<Typography  sx={{mt:1}}style={{display:"block", fontSize:"14px" ,color:"white"}}>
4725 Quiet Woods Lane. Apt. F
Fairfax. Virginia. EEUU
C.P. 22034.
</Typography>
</Grid>
</Grid>



<Grid item md={4} sm={12} className="email-container social-container" style={{display:"flex", alignContent: "center", alignItems: "center"}}>
<Grid item md={3} sm={12} style={{display:"flex", justifyContent:"start"}}>
<Fab className="icon-social" disabled aria-label="like" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} >
        <InboxIcon style={{ color: "white" }}  />
      </Fab>
</Grid>
<Grid item md={9} sm={12} >
<Typography variant="h7" style={{display:"block",color:"white"}}>Email</Typography>
<Typography  sx={{mt:1}}style={{display:"block", fontSize:"14px" ,color:"white"}}>
ignacio-angus@hotmail.com
</Typography>
</Grid>
</Grid>


</Grid>
</Container>
</div>



<div className="footer-bg" >
<Container>
<Grid container  sx={{ p: 2, pt:6 }} clasName="footer-bg">
<Grid item md={4} sm={12} style={{fontSize:"14px"}}>
<Link to="/" style={{color:"#5a5a5a"}}>
<img src={require('../assets/logo.png')} alt="asd" style={{width:"230px", height:"55px",backgroundColor:"white",padding:"10px"}} className="imagen5"/></Link>
<div  style={{marginTop:"14px",color:"white",textAlign:"justify"}}>Gashari Logistics & Transportation Company LLC, provides moving and transportation services.</div>
<Link to="/contact" >
<Button sx={{mt:3}} variant="contained" style={{backgroundColor:"#003784"}}>Contact</Button></Link>
</Grid>
<Grid item md={4} sm={12} xs={12} className="container-links">
<Typography variant="h6" style={{color:"white"}} sx={{pl:2}}>Links</Typography>
<nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon style={{ color: "white" }} />

              </ListItemIcon>
              <Link to="/" ><ListItemText style={{color:"white"}} primary="Home" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon  style={{ color: "white" }}/>
              </ListItemIcon>
              <Link to="/about"><ListItemText style={{color:"white"}} primary="About"/></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon  style={{ color: "white" }}/>
              </ListItemIcon>
              <Link to="/services" >  <ListItemText  style={{color:"white"}} primary="Services" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon  style={{ color: "white" }}/>
              </ListItemIcon>
              <Link to="/contact" > <ListItemText style={{color:"white"}} primary="Contact" /></Link>
            </ListItemButton>
          </ListItem>
          
        </List>
      </nav>
</Grid>
 
<Grid item md={4} sm={12} >
<Typography variant="h6" style={{color:"white"}}>Contact</Typography>
<div  style={{marginTop:"14px",color:"white"}}>We will contact you as soon as possible. Just leave us your information and queries with which we can help you.
</div>

</Grid>        
</Grid>
</Container>
</div>
</div>



<div className="footer sub-footer"> 
<Container>
<Grid container sx={{  p: 2 }}  >
<Grid item className="copy" md={6} sm={12} style={{display:"flex", alignContent: "center", alignItems: "center"}}>
© Copyright 2022 Developed by Marco Segura
</Grid>
<Grid item md={6} sm={12} className="social-icons" style={{ width:"100%"}} >
<IconButton aria-label="delete" >
  <FacebookIcon  style={{ color: "white" }} />
</IconButton>
<IconButton aria-label="delete" disabled color="primary">
  <TwitterIcon style={{ color: "white" }} />
</IconButton>
<IconButton color="secondary" aria-label="add an alarm">
  <InstagramIcon  style={{ color: "white" }}  />
</IconButton>
</Grid>
</Grid>
</Container>
</div>
</div>
);
}

export default Footer;
