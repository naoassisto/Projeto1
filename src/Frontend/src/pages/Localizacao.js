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
      <h3>Pesquisa por ID</h3>
      <h3>Pesquisa por ID</h3>
      <img src={logo} alt="Logo" width="1200" height="700"/>
    </div>
    
    </>
  );
}

export default Localizacao;