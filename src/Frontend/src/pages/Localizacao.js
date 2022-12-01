import { Typography } from '@mui/material';
import React from 'react';
import logo from '../images/mapa.png'; 
import NavigationBar from '../services/navbar';

console.log(logo);

function Localizacao() {
  
  return(
    <>
    <NavigationBar></NavigationBar>
    <br></br>
    <br></br>
    <div>
      <Typography sx={{ml:'1.875rem', fontSize:'24px' }}>Pesquisa por ID</Typography>
      <Typography sx={{ml:'1.875rem', fontSize:'24px'}}>Pesquisa por ID</Typography>
      <img src={logo} alt="Logo" width="1200" height="700"/>
    </div>
    
    </>
  );
}

export default Localizacao;