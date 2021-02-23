import  React, { createContext, useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket";


export const SocketContext = createContext();


export const SocketProvider = ( { children } ) => {

    const { online, socket } = useSocket( 'http://localhost:5000' ) ;

    const [ bands, setBands ] = useState( [] )

    useEffect( () => {

        socket.on('current-band', ( bands ) => {
            setBands( bands )
            })
    
        return () => socket.off('current-band')

    }, [ socket ])     



    return (

     <SocketContext.Provider value={{ socket, online, bands, setBands }} >
            { children }
     </SocketContext.Provider>

    )



}