import React, { useContext } from 'react'
import { SocketContext } from '../context/SocketContext'

export const BandList = () => {

    
    // const [ bands, setBands ] = useState( [] )
    
    const { socket , bands , setBands } = useContext( SocketContext )


    // useEffect( () => {

    //     socket.on('current-band', ( bands ) => {
    //         setBands( bands )
    //         })
    
    //     return () => socket.off('current-band')

    // }, [ socket ])                      



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
        socket.emit( 'change-name' , { id , name });
    }

    const vote = ( id ) => {
        console.log('votar - app');
        socket.emit( 'votar-band', id );
     }
     const removeBand = ( id ) => {

        console.log('remove band')
        socket.emit( 'remove-band', id )
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
                        onClick={ () => removeBand( band.id ) }
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
