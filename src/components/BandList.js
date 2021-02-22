import React, { useEffect, useState } from 'react'

export const BandList = ( { data , vote, remove, changeName }  ) => {

    
    const [ bands, setBands ] = useState( data )
    


    useEffect( () => {
                    
        setBands( data )
        
    }, [ data ])                      

    const handleName = ( evt, id ) => {
       
        const newName = evt.target.value;

        setBands( bands =>  bands.map( band => {
                
            if ( band.id === id  ){
                    band.name = newName
                }
                return band
            })
        )
    }

    const onLossesFocus = ( id, name ) => {
        // console.log(id, name)
        // TODO disparar el evento de socket
        changeName( id, name )
    }


    

    const createRow = () =>  {



        return (
            bands.map( band => (
                <tr key={ band.id } >
                    <td>
                        <button 
                        className="btn btn-primary"
                        onClick={ () => vote( band.id ) }
                        >+1</button>
                    </td>
                    <td>
                        <input
                        className="form-control"
                        value={ band.name }
                        onChange={ ( evt ) =>  handleName( evt, band.id ) }
                        onBlur={ () => onLossesFocus( band.id, band.name ) }
                        />
                    </td>
                    <td> <h3> { band.votes } </h3> </td>
                    <td> 
                        <button
                        className="btn btn-danger"
                        onClick={ () => remove( band.id ) }
                        > Delete </button>
                     </td>
                </tr>
            )
        )
    )
    }
    
    
    return (
        <>
            <table className="table table-stripped" >
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Votes</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { createRow() }
                </tbody>
            </table>   
        </>
    )
}
