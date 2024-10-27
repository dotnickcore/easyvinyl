import React from 'react'
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/styles';
import useStyles from './sidestyles';
import { Link } from 'react-router-dom';

const redLogo = 'https://i.ibb.co/LvqBDQ0/easyvinyl-red.png';
const blueLogo = 'https://i.ibb.co/Xy71S55/easyvinyl-blue.png';

const categories = [
  { label: 'All', value: 'all' },
  { label: 'New', value: 'new' },
  { label: 'Second Hand', value: 'second_hand' }
]

const genreCategories = [
  { label: 'Rock', value: 'rock' },
  { label: 'Hip-Hop', value: 'hip_hop' },
  { label: 'Alternative', value: 'alternative' },
  { label: 'Electronic', value: 'electronic' },
  { label: 'Metal', value: 'metal' },
  { label: 'Punk', value: 'punk' },
  { label: 'Jazz', value: 'jazz' },
  { label: 'Blues', value: 'blues' },
  { label: 'Soundtracks', value: 'soundtracks' },
  { label: 'Reggae', value: 'reggae' },
  { label: 'Classical', value: 'classical' },
  { label: 'Country', value: 'country' },
  { label: 'Soul', value: 'soul' },
  { label: 'World', value: 'world' },
  { label: 'Folk', value: 'folk' }
]

function Sidebar({setMobileOpen}) {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img 
        className={classes.image}
        src={theme.palette.mode === 'light' ? blueLogo : redLogo } alt="EasyVinylLogo"/>
      </Link>

      <Divider/>

      <List>
            <ListSubheader>Categories </ListSubheader>
            {categories.map(({ label, value }) => (
                <Link key={value} className={classes.links} to="/">
                    <ListItem onClick={() => {}} button>
                        {/* <ListItemIcon>
                            <img src={redLogo} className={classes.genreImage} height={30} />
                        </ListItemIcon> */}
                        <ListItemText primary={label} />
                    </ListItem>
                
                </Link>
            ) )}
       </List>  

      <Divider/>

      <List>
            <ListSubheader>Genres </ListSubheader>
            {genreCategories.map(({ label, value }) => (
                <Link key={value} className={classes.links} to="/">
                    <ListItem onClick={() => {}} button>
                        {/* <ListItemIcon>
                            <img src={redLogo} className={classes.genreImage} height={30} />
                        </ListItemIcon> */}
                        <ListItemText primary={label} />
                    </ListItem>
                
                </Link>
            ) )}
       </List>   
    </>
  )
}

export default Sidebar