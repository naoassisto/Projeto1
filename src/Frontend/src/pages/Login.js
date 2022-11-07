import React from "react";
import NavigationBar from "../services/navbar";
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Login() {
    return (
    <>
        <NavigationBar></NavigationBar>
        <Typography sx={{fontFamily:'Manrope', fontSize:'24px', lineHeight:'32px'}}>Usuário:</Typography>
        <TextField  color="success" sx={{backgroundColor:'#DBDBDB', borderRadius:'10px'}} />
        <Typography sx={{fontFamily:'Manrope', fontSize:'24px', lineHeight:'32px'}}>Senha:</Typography>
        <TextField  color="success" sx={{backgroundColor:'#DBDBDB', borderRadius:'10px'}} />
        <Box sx={{ flexGrow: 0, bgcolor:"#0082AF99", borderRadius:'90px', width:'282px', height:'81px', top:'593px', left:'490px' }}>
                <div>
                    <Button size="large" sx={{color:"#000000", fontFamily:'Manrope', fontSize:'36px',fontStyle:'normal', width:'183px', heigth:'63px'}}>
                        <Typography>Login</Typography>
                    </Button>
                </div>
            </Box>
    </>
  );
}
       
export default Login;