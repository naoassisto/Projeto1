import { Typography } from '@mui/material';
import React from 'react';
import logo from '../images/mapa.png';
import NavigationBar from '../services/navbar';
import { TextField } from '@mui/material';
import { display } from '@mui/system';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

console.log(logo);

function Localizacao() {

  return (
    <>
      <NavigationBar></NavigationBar>
      <br></br>
      <br></br>

      <div sx={{ display: 'inline' }}>
        <Typography sx={{ ml: '15rem', fontSize: '24px', height: '50px', display: 'inline' }}>Pesquisa por ID</Typography>
        <TextField label="ID do Dispositivo"
          id="outlined-size-small"
          defaultValue="ID"
          size="small" style={{ padding: 10 }} sx={{ ml: '300px', height: '50px', borderRadius: '36px', display: 'inline' }} />
      </div>

      <div sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <div sx={{ display: 'inline', height: '2px'}}>
          <Typography sx={{ ml: '15rem', fontSize: '24px', height: '10px', width: 'fit-content' }}>Pesquisa por tipo</Typography>
        </div>
        <FormControl sx={{ m: 1, minWidth: 120 , ml: '720px'}} size="small">
          <InputLabel id="demo-select-small">Tipo</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            label="Categoria" >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Notebook</MenuItem>
            <MenuItem value={20}>Tablet</MenuItem>
            <MenuItem value={30}>Cadeiras</MenuItem>
            <MenuItem value={40}>Mesas</MenuItem>

          </Select>
        </FormControl>
      </div>
      <img src={logo} alt="Logo" width="1200" height="700" />

    </>
  );
}

export default Localizacao;
