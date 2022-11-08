import NavigationBar from "../services/navbar";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

function SelectRastreio() {
    return (
        <>
        <NavigationBar></NavigationBar>
            <Box sx={{ flexGrow: 0, bgcolor:"#DBDBDB", height: '75px', width: '1440px', left: '-42px', top: '118px', borderRadius: '0px'}}>
                <Typography sx={{height: '53px', width: '1173px', left: '0px', top: '0px', borderRadius: '0px', fontFamily:'Manrope', fontWeight:'300px', fontSize: '28px', lineHeight:'38.25px'}}>
                    Abaixo, escolha uma das opções para visualizar os ativos
                </Typography>
            </Box>
            <Box sx={{ flexGrow: 0, bgcolor:"#0082AF", borderRadius:'90px', width:'337px', height:'69px', paddingTop:'379px', paddingLeft:'336px' }}>
                <div>
                    <Button size="large" sx={{color:"#000000"}}>
                        <Typography>Ativos Eletrônicos</Typography>
                    </Button>
                </div>
            </Box>
            <Box sx={{ flexGrow: 0, bgcolor:"#0082AF", borderRadius:'90px', width:'337px', height:'69px', paddingTop:'561px', paddingLeft:'336px' }}>
                <div>
                    <Button size="large" sx={{color:"#000000"}}>
                        <Typography>Ativos Mobiliários</Typography>
                    </Button>
                </div>
            </Box>
        </> 
    );
  }
  
  export default SelectRastreio;