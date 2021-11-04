import { createContext, useContext } from 'react';
import { io } from 'socket.io-client';
import socket from './_socket';
const AppContext = createContext({});
export function AppWrapper({ children }) {
    let globalContext = {
        socket: socket
    };
    return (
        <AppContext.Provider value= { globalContext } >
        { children }
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
