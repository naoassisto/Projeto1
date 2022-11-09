import { Button, Typography } from "@mui/material";
import NavigationBar from "../services/navbar";
import TextField from "@mui/material/TextField";

function AdicionarDispositivo() {
    return (
        <>
        <NavigationBar></NavigationBar>

            <Typography sx={{height:'28px', width:'319px', mt:'150px', ml:'121px', fontFamily: 'Inter', fontSize: '30px', fontWeight: '400', lineHeight: '36px', letterSpacing: '0em', align: 'left'}}>
                Tipo do dispositivo
            </Typography>
            <TextField variant="filled" color="success" sx={{border:'2px solid #000000',backgroundColor:'#ffff', borderRadius:'7px', width:'514px', height:'42px', ml:'467px'}} />

            <Typography sx={{height:'28px', width:'319px', mt:'150px', ml:'121px', fontFamily: 'Inter', fontSize: '30px', fontWeight: '400', lineHeight: '36px', letterSpacing: '0em', align: 'left'}}>
                ID do dispositivo
            </Typography>
            <TextField variant="filled" color="success" sx={{border:'2px solid #000000',backgroundColor:'#ffff', borderRadius:'7px', width:'514px', height:'42px', ml:'467px'}} />

            <Typography sx={{height:'28px', width:'319px', mt:'150px', ml:'121px', fontFamily: 'Inter', fontSize: '30px', fontWeight: '400', lineHeight: '36px', letterSpacing: '0em', align: 'left'}}>
                Tag do dispositivo
            </Typography>
            <TextField variant="filled" color="success" sx={{border:'2px solid #000000',backgroundColor:'#ffff', borderRadius:'7px', width:'514px', height:'42px', ml:'467px'}} />

            <Button sx={{width:'188px', height:'56.93px', mt:'186px', ml:'257px', backgroundColor:'#34C471', color:'#FFFFFF', borderRadius:'36px', display:'inline'}}>Adicionar</Button>
            <Button sx={{width:'213px', height:'56.93px', mt:'186px', ml:'88px', backgroundColor:'#0082AF', color:'#FFFFFF', borderRadius:'36px', display:'inline'}}>Alterar Tag</Button>
            <Button sx={{width:'213px', height:'56.93px', mt:'186px', ml:'88px', backgroundColor:'#E64747', color:'#FFFFFF', borderRadius:'36px', display:'inline'}}>Remover</Button>
        </>
    );
  }
  
  export default AdicionarDispositivo;