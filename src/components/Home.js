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
import { styled } from "@mui/material/styles";
import Paper from '@mui/material/Paper';
import './Home.css';
import Image from '../assets/wallpaper.jpg';
import {Parallax} from 'react-parallax';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
const styles = {
  paperContainer: {
      backgroundImage: `url(${Image})`,
      height: 500,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: '2rem'
    
  },
  contenedorObj: {
    display: 'block',
    width: '100%',
    textAlign: 'center',
     
  }
  }

 

const CardContentNoPadding = styled(CardContent)(`
background:black;
color:white;
padding: 70;
text-align: center;
`);

const Home = () => {
const [value, setValue] = React.useState(0);

  return (
    <div>
      <Card>
      <CardActionArea>
      <Paper style={styles.paperContainer}>
        <div style={styles.contenedorObj}>
                <Box sx={{ pl: 5, pr:5}}>Some text to fill the Paper Component</Box >
                <Button variant="contained">Contained</Button>
                </div>
            </Paper>
        <CardContentNoPadding  >
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.whtie">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContentNoPadding>
      </CardActionArea>
    
    </Card>  
    <Container>
      <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center', mt: 5  }}>
    <div className="subtitulo">Professional Warehouse</div>
    <div className="titulo">Warehouse <span className="resaltar"> solution </span>for every need</div>
    </Typography>
    <div className="divisor"> </div>
    <Grid container sx={{ m: 1, p: 2 }} >
      <Grid item md={4} sm={12}  style={styles.superiorMargin} >
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require('../assets/wallpaper.jpg')}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item md={4} sm={12} className="objeto">
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require('../assets/wallpaper.jpg')}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item md={4} sm={12} className="objeto">
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require('../assets/wallpaper.jpg')}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
      </Grid>
    </Grid>

    <Grid container sx={{ m: 1, p: 2 }}>
      <Grid item md={4} sm={12}>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <CardMedia
          component="img"
          height="140"
          image={require('../assets/wallpaper.jpg')}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item md={4} sm={12} className="objeto">
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require('../assets/wallpaper.jpg')}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item md={4} sm={12} className="objeto">
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require('../assets/wallpaper.jpg')}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
      </Grid>
    </Grid>
   
    </Container>
    <Parallax   className="parallax" bgImage={Image}  strength={800}>
         <div style={{ height: 300 , display:"flex", justifyContent:"Center", alignItems:"center"}}>
          <div style={{display:"block", textAlign:"center"}}>
         <div className="titulo" style={{ fontSize: 50, color: "#fff" }}>Warehouse for every need</div> 
         <div className="titulo" style={{ fontSize: 30, color: "#fff" }}>Warehouse for every need</div> 
    <div className="divisor-white"> </div>
         </div>
       </div> 
    </Parallax>
    <Container className="margin-superior">
      <Grid container sx={{ m: 1, p: 2 }} >
        <Grid item md={6} sm={12} >
        <img src={require('../assets/wallpaper.jpg')} alt="asd" className="imagen5"/>
       </Grid>
       <Grid item md={6} sm={12} >
    

       <Card className="contenedor-derecho">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>
        <Typography variant="h5" component="div">
        Sed do eiusmod tempor incididunt ut
        </Typography>
        <Typography variant="body2" sx={{mt:2}} style={{width:"90%", textAlign:"justify"}}>
        Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>


       </Grid>
      </Grid>
    </Container>

    <Parallax className="parallax"  bgImage={Image}  strength={400}>
      <Container>
        <Grid container sx={{ m: 1, p: 2, mt:5, mb:5}}  display="flex"
  justifyContent="center">
   
          <div style={{display:"block", textAlign:"center", width: "100%"}}>
     <div className="titulo" style={{ fontSize: 50, color: "#fff" }}>Warehouse for every need</div> 
         <div className="titulo" style={{ fontSize: 30, color: "#fff" }}>Warehouse for every need</div> 
          </div>
          <Grid item md={4} sm={12}  className="item-imagen">
       <ImageList   sx={{  height: 250 }}  >
     
        <ImageListItem >
          <img
           src={require('../assets/photo-1589118949245-7d38baf380d6.jpg')}
           alt="asd"
            loading="lazy"
          />
          <ImageListItemBar
            title="Image title"
            subtitle="Image subtitle"
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
           src={require('../assets/photo-1589118949245-7d38baf380d6.jpg')}
           alt="asd"
            loading="lazy"
          />
          <ImageListItemBar
            title="Image title"
            subtitle="Image subtitle"
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
           src={require('../assets/photo-1589118949245-7d38baf380d6.jpg')}
           alt="asd"
            loading="lazy"
          />
          <ImageListItemBar
            title="Image title"
            subtitle="Image subtitle"
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
    <Button variant="contained" style={{width:"200px"}}sx={{mt:3}}>Contained</Button>
    </Grid>
    </Container>
    </Parallax>
    <Container>
    <Grid container sx={{ m: 1, p: 2, mt:5, mb:5}} >
      <Grid item md={4} sm={12} className="textoizquierda">
      <Typography variant="h6" component="div" gutterBottom>
      TRANSPORTATION COMPANY
    </Typography>
    <Typography variant="h3" gutterBottom component="div" >
    We provide full range global logistics solution
    </Typography>
    <Typography variant="h5" gutterBottom component="div" style={{textAlign:"justify"}} >
    You can take your freight & logistics needs with a personal approach on logixs company
    </Typography>
    <Typography gutterBottom component="div" style={{textAlign:"justify"}} sx={{mt:3}}>
    Long established fact that  a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has a more-or-less normal distribution
    </Typography>
      </Grid>
      <Grid item md={4} sm={12} style={{display:"flex",justifyContent:"center",margin:"auto"}}>
        <div style={{display:"block", textAlign:"center"}}>
            <img style={{width:"100%",height:"100%"}} 
            alt="asd" 
              src={require('../assets/photo-1589118949245-7d38baf380d6.jpg')}
            />
            

            <Box >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<FmdGoodIcon />} />
      </BottomNavigation>
    </Box>
    </div>
      </Grid>
    </Grid>
    </Container>
    </div>
  )
}

export default Home
