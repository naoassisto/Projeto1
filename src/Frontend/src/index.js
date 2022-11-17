import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainRastreio from './pages/PrincipalRastreio';
import Home from './pages/Home'
import SelectRastreio from './pages/SelecaoRastreio'
import Graphicss from './pages/Graphics'
import AdicionarDispositivo from './pages/AdicionarDispositivo';

import * as AWS from 'aws-sdk'
import { ConfigurationOptions } from 'aws-sdk'


const configuration = ConfigurationOptions = {
    region: 'sa-east-1',
    secretAccessKey: 'AKIA2XG46BGXBIM7FA46',
    accessKeyId: 'fl+RuDyZhbZD+bilEv4EZLn8E1b5srh1cn13sTXP'
}

AWS.config.update(configuration)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
