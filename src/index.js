import React from 'react';
import ReactDOM from 'react-dom';
import AppSWBC from './AppSWBC';
import App from './App';


import { useFlags, asyncWithLDProvider } from "launchdarkly-react-client-sdk";
import { deviceType, osName } from "react-device-detect";
import getUserId from './utils/getUserId';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);