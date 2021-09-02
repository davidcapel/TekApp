import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { WalletProvider } from './Components/WalletProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChainId, DAppProvider, Config } from '@usedapp/core'


const config: Config = {
  readOnlyChainId: ChainId.Mainnet,
  readOnlyUrls: {
    [ChainId.Mainnet]: 'https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934',
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
