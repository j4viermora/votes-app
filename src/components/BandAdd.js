import React, { useState } from 'react'

export const BandAdd = ( {addNewBand} ) => {

    const [ band, addBand ] = useState( '' )


    const handleForm = (evt ) => {
        
        evt.preventDefault();
        console.log( band )

        if ( band.trim().length >= 2 ) {

            addNewBand( band )

        }else{
            alert( 'No puede enviar le formulari vacío' )
        }
       
        
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
