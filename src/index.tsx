import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { WalletProvider } from './Components/WalletProvider';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
import './app_style.scss'
import { ChainId, DAppProvider, Config } from '@usedapp/core'


const config: Config = {
  readOnlyChainId: ChainId.Goerli,
  readOnlyUrls: {
    [ChainId.Mainnet]: 'https://mainnet.infura.io/v3/60159d12d2154d9392e078fb59a18658',
    [ChainId.Goerli]: 'https://goerli.infura.io/v3/60159d12d2154d9392e078fb59a18658',
  },
}



ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <WalletProvider>
        <App />
      </WalletProvider>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
