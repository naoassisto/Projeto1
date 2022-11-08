import NavigationBar from "../services/navbar";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

function SelectRastreio() {
    return (
        <>
        <NavigationBar></NavigationBar>
        <Box sx={{ flexGrow: 0, bgcolor:"#DBDBDB", height: '75px', width: '1440px', left: '-42px', top: '118px', borderRadius: '0px'}}>
            <Box sx={{ height:'53px', width:'1173px', mt:'11.5px', ml:'100px'}}>
                <Typography sx={{ fontFamily:'Manrope', fontWeight:'300px', fontSize: '28px', lineHeight:'38.25px'}}>
                    Abaixo, escolha uma das opções para visualizar os ativos
                </Typography>
            </Box>
        </Box>
        <Button sx={{ bgcolor:"#096C86", borderRadius:'90px', width:'592px', height:'87px', mt:'379px', ml:'336px', display:'block' }}>
            <Typography sx={{color:'#000000', fontFamily:'Manrope'}}>Ativos Eletrônicos</Typography>
        </Button>
        <Button sx={{ bgcolor:"#096C86", borderRadius:'90px', width:'592px', height:'87px', mt:'561px', ml:'336px', display:'block'}}>
            <Typography sx={{color:'#000000', fontFamily:'Manrope'}}>Ativos Mobiliários</Typography>
        </Button>
        </> 
    );
  }
  
  export default SelectRastreio;