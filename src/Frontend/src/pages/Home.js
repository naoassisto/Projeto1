import NavigationBar from "../services/navbar";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

function Home() {
    return (
        <>
        <NavigationBar></NavigationBar>
        <div>
                <Button sx={{bgcolor:"#0082AF", borderRadius:'90px', width:'337px', height:'69px',display:'inline-block', mt:'657px', ml:'95px' }}>
                    <Typography sx={{color:'#000000'}}>
                        Adicionar Dispositivo
                    </Typography>
                </Button>
                <Button sx={{bgcolor:"#0082AF", borderRadius:'90px', width:'337px', height:'69px', display:'inline-block', mt:'657px', ml:'95px'}}>
                    <Typography sx={{color:'#000000'}}>
                        Adicionar Dispositivo
                    </Typography>
                </Button>
                <Button sx={{bgcolor:"#0082AF", borderRadius:'90px', width:'337px', height:'69px', display:'inline-block', mt:'657px', ml:'95px'}}>
                    <Typography sx={{color:'#000000'}}>
                        Adicionar Dispositivo
                    </Typography>
                </Button>
        </div>
        </>
    );
  }
  
  export default Home;