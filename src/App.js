import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

import { BandAdd } from "./components/BandAdd";
import { BandList } from "./components/BandList";


const connectSocketServer = () => {
  const socket = io.connect( "http://localhost:5000",{
    transports : [ 'websocket' ] 
  })
  return socket 
}




function App() {


  const [ socket ] = useState( connectSocketServer )
  const [ online, setOnline ] = useState( false )
  const [ bands, setBands ] = useState( [] )
  

  useEffect( () => {

    // console.log( socket )
    setOnline( socket.connected )

  }, [ socket ] )
  
  useEffect( () => {

    socket.on( 'connect', () => {
      setOnline( true )
    } )


  }, [ socket ]  )

  useEffect( () => {

    socket.on( 'disconnect', () => {
      setOnline( false )
    } )

  }, [ socket ] )


  useEffect( () => {

    socket.on('current-band', ( bands ) => {
      setBands( bands )
    })


  }, [ socket ] )


  const vote = ( id ) => {
    console.log('votar - app');
    socket.emit( 'votar-band', id );
  }

  const removeBand = ( id ) => {

    console.log('remove band')
    socket.emit( 'remove-band', id )
  }

  const changeName = ( id, name ) => {

    socket.emit( 'change-name' , {
      id , name
    } )

  }

  const addNewBand = ( name ) => {
    console.log('new band')

    socket.emit( 'add-new-band',{ name })

  }

  return (
    <div className="container">

        <div className='alert' >

            <p>
              Service status:
              {
                (online)
              ? <span className='text-success' >Online</span>
              : <span className='text-danger' >Offline</span>
              }

              
            </p>

          <h1> Band Name </h1>
          <hr/>
            <div className='row'>
                <div className='col-8'>
                    <BandList 
                    data={ bands }
                    vote={ vote }
                    remove={ removeBand }
                    changeName={ changeName }
                    />
                </div>
                <div className='col-4'>
                    <BandAdd
                    addNewBand={ addNewBand }
                    />
                </div>
            
            </div>


        </div>
    </div>
  );
}

export default App;
