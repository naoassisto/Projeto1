import NavigationBar from "../services/navbar";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

function Home() {
        // constructor(props) {
        //     super(props);
        //     this.state = { apiResponse: "" };
        // }

        // callAPI() {
        //     fetch("http://localhost:9000/testAPI")
        //     .then(res => res.text())
        //     .then(res => this.setState({ apiResponse: res }));
        // }

        // componentWillMount() {
        //     this.callAPI();
        // }
    // render(){
        return (
            <>
            <NavigationBar></NavigationBar>
            <div>
                    <Button sx={{bgcolor:"#0082AF", borderRadius:'90px', width:'337px', height:'69px',display:'inline-block', mt:'549px', ml:'95px' }}>
                        <Typography sx={{color:'#000000'}}>
                            Adicionar Dispositivo
                        </Typography>
                    </Button>
                    <Button sx={{bgcolor:"#0082AF", borderRadius:'90px', width:'337px', height:'69px', display:'inline-block', mt:'549px', ml:'95px'}}>
                        <Typography sx={{color:'#000000'}}>
                            Rastrear Dispositivos
                        </Typography>
                    </Button>
                    <Button sx={{bgcolor:"#0082AF", borderRadius:'90px', width:'337px', height:'69px', display:'inline-block', mt:'549px', ml:'95px'}}>
                        <Typography sx={{color:'#000000'}}>
                            Gerar Relatórios
                        </Typography>
                    </Button>
            </div>
            </>
        );
    }
    
//   }
  
  export default Home;