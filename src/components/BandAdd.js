import React, { useContext, useState } from 'react'
import { SocketContext } from '../context/SocketContext'

export const BandAdd = () => {

    const { socket } = useContext( SocketContext )


    const [ band, addBand ] = useState( '' )

    const handleForm = (evt ) => {
        
        evt.preventDefault();

        if ( band.trim().length >= 2 ) {

            addNewBand( band )
            addBand( '' )

        }else{
            alert( 'No puede enviar le formulari vacío' )
        } 
    }

    const addNewBand = ( name ) => {
        console.log('new band')
    
        socket.emit( 'add-new-band',{ name })
    
      }
   
    return (
        <>

            <h3> Add Band </h3>

            <form
              onSubmit={  handleForm }
            >
                <input
                value={ band }
                className='form-control'
                placeholder='Add new newBand'
                onChange={ ( evt ) => addBand( evt.target.value ) }               
                />
            </form>

        </>
    )
}
