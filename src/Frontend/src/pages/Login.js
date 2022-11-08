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
        <div>
            <Typography sx={{fontFamily:'Manrope', fontSize:'24px', lineHeight:'32px'}}>
                Usuário:
            </Typography>
            <TextField  color="success" sx={{backgroundColor:'#DBDBDB', borderRadius:'10px'}} />
        </div>
        <div>
            <Typography sx={{fontFamily:'Manrope', fontSize:'24px', lineHeight:'32px'}}>
                Senha:
                </Typography>
            <TextField  color="success" sx={{backgroundColor:'#DBDBDB', borderRadius:'10px'}} />
        </div>
        <Button sx={{backgroundColor:"#0082AF99", width:'282px', height:'81px', mt:'104px', ml:'490px', borderRadius:'90px'}}>
            <Typography sx={{color:'#000000'}}>Login</Typography>
        </Button>
    </>
  );
}
       
export default Login;