import { Button, Typography } from "@mui/material";
import NavigationBar from "../services/navbar";
import TextField from "@mui/material/TextField";

function AdicionarDispositivo() {
    return (
        <>
        <NavigationBar></NavigationBar>

            <Typography sx={{height:'1.75rem', width:'19.94rem', mt:'9.375rem', ml:'7.563rem', fontFamily: 'Inter', fontSize: '1.875rem', fontWeight: '400', lineHeight: '2.25rem', letterSpacing: '0em', align: 'left'}}>
                Tipo do dispositivo
            </Typography>
            <TextField variant="filled" color="success" sx={{border:'2px solid #000000',backgroundColor:'#ffff', borderRadius:'7px', width:'514px', height:'42px', ml:'467px'}} />

            <Typography sx={{height:'1.75rem', width:'19.94rem', mt:'3.688rem', ml:'7.563rem', fontFamily: 'Inter', fontSize: '1.875rem', fontWeight: '400', lineHeight: '2.25rem', letterSpacing: '0em', align: 'left'}}>
                ID do dispositivo
            </Typography>
            <TextField variant="filled" color="success" sx={{border:'2px solid #000000',backgroundColor:'#ffff', borderRadius:'7px', width:'514px', height:'42px', ml:'467px'}} />

            <Typography sx={{height:'1.75rem', width:'19.94rem', mt:'3.125rem', ml:'7.563rem', fontFamily: 'Inter', fontSize: '1.875rem', fontWeight: '400', lineHeight: '2.25rem', letterSpacing: '0em', align: 'left'}}>
                Tag do dispositivo
            </Typography>
            <TextField variant="filled" color="success" sx={{border:'2px solid #000000',backgroundColor:'#ffff', borderRadius:'7px', width:'514px', height:'42px', ml:'467px'}} />

            <Button sx={{width:'188px', height:'56.93px', mt:'11.625rem', ml:'16.063rem', backgroundColor:'#34C471', color:'#FFFFFF', borderRadius:'36px', display:'inline'}}>Adicionar</Button>
            <Button sx={{width:'213px', height:'56.93px', mt:'11.625rem', ml:'5.5rem', backgroundColor:'#0082AF', color:'#FFFFFF', borderRadius:'36px', display:'inline'}}>Alterar Tag</Button>
            <Button sx={{width:'213px', height:'56.93px', mt:'11.625rem', ml:'5.5rem', backgroundColor:'#E64747', color:'#FFFFFF', borderRadius:'36px', display:'inline'}}>Remover</Button>
        </>
    );
  }
  
  export default AdicionarDispositivo;