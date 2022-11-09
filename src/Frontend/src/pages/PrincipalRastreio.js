import { Box, TextField, Typography } from "@mui/material";
import NavigationBar from "../services/navbar";

function MainRastreio() {
    return (
        <>
            <NavigationBar></NavigationBar>
            <div>
                <Typography>Pesquisar por ID</Typography>
                <TextField></TextField>
            </div>
            <div>
                <Typography>Pesquisa por Tipo</Typography>
                <TextField></TextField>
            </div>
            <Box>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
            </Box>
        </>
    );
  }
  
  export default MainRastreio;