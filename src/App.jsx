import React from 'react'
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Vinyls from './components/Vinyls/Vinyls';
import Artists from './components/Artists/Artists';
import NavBar from './components/NavBar/NavBar';
import VinylInformation from './components/VinylInformation/VinylInformation';
import Profile from './components/Profile/Profile';
import useStyles from './styles';

function App() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
        <CssBaseline />
        <BrowserRouter>
            <NavBar />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                    <Routes>
                        <Route path='/vinyl/:id' element={ < VinylInformation/> } />
                        <Route path='/' element={ < Vinyls/> } />
                        <Route path='/artists/:id' element={ < Artists /> } />
                        <Route path='/profile/:id' element={ < Profile /> } />
                    </Routes>
            </main>
        </BrowserRouter>
    </div>
  );
}

export default App;
