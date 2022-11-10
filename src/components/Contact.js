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


const Contact = () => {
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
    <Grid container sx={{ m: 1, p: 2 }}>
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
            CONTACTO
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
    <Parallax className="parallax" bgImage={Image}  strength={400}>
       <div>  <div style={{ height: 300 }}>
         <div className="titulo">Warehouse for every need</div> 
       </div> </div>

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
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
         sa
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>


       </Grid>
      </Grid>
    </Container>

    <Parallax className="parallax" bgImage={Image}  strength={400}>
        
       <ImageList   sx={{ width: 500, height: 450 }}  >
     
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
    </Parallax>
    </div>
  )
}

export default Contact
