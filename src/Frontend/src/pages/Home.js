import NavigationBar from "../services/navbar";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Home() {
    return (
        <>
        <NavigationBar></NavigationBar>
            <Box sx={{ flexGrow: 0, bgcolor:"#0082AF", borderRadius:'90px', width:'337px', height:'69px', top:'657px', left:'95px' }}>
                <div>
                    <Button size="large" sx={{color:"#000000"}}>Adicionar Dispositivo</Button>
                </div>
            </Box>
            <Box sx={{ flexGrow: 0, bgcolor:"#0082AF", borderRadius:'90px', width:'337px', height:'69px', top:'657px', left:'483px' }}>
                <div>
                    <Button size="large" sx={{color:"#000000"}}>Rastrear Dispositivos</Button>
                </div>
            </Box>
            <Box sx={{ flexGrow: 0, bgcolor:"#0082AF", borderRadius:'90px', width:'337px', height:'69px', top:'657px', left:'879px' }}>
                <div>
                    <Button size="large" sx={{color:"#000000"}}>Gerar Relatórios</Button>
                </div>
            </Box>
        </>
    );
  }
  
  export default Home;