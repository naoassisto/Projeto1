// import NavigationBar from "../services/navbar";
// import './App.css';
// import { useEffect, useState } from 'react';
// import axios from "axios"


// function Patrimonio() {
//   // Array com os passageiros falsos da API
//   const [data, setData] = useState([])
//   // Número total de páginas
//   const [totalPages, setTotalPages] = useState(1)
//   // Número total de passageiros
//   const [totalPassengers, setTotalPassengers] = useState(1)
//   // Hook para fazer a primeira chamada do componente
//   useEffect(() => {
//     // Função para recuperar informações da API
//     axios.get("https://api.instantwebtools.net/v1/passenger?page=0&size=10")
//       .then((res) => {
//         // Pega e define os valores nas respectivas variáveis
//         const { data, totalPages, totalPassengers } = res.data
//         setData(data)
//         setTotalPages(totalPages)
//         setTotalPassengers(totalPassengers)
//       })
//   }, [])
//   return (
//     <div className="App">
//         <NavigationBar></NavigationBar>
//     </div>
//   );
// }
// export default Patrimonio;