import React, { FunctionComponent, useContext } from 'react';
import { useEtherBalance, useEthers } from '@usedapp/core'


type WalletProviderProps = {

}

const WalletContext = React.createContext({
    activateBrowserWallet: Object,
    account: String,
    deactivate: Object,
});

export const useWallet = () => {
    return useContext(WalletContext);
}

export const WalletProvider: FunctionComponent<WalletProviderProps> = (props) => {
    const { activateBrowserWallet, account, deactivate } = useEthers()

    

    return (
        
            <WalletContext.Provider value={{ activateBrowserWallet, account, deactivate }}>
                {props.children}
            </WalletContext.Provider>
       

    )
};