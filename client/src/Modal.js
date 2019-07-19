import React from 'react'


export default function Modal(props) {


    if(props.show){

        return (
            <div className="modal" >
                <h1>Please , accept terms and conditions</h1><button className="modbtn" onClick={props.closeModal}>X</button>
            </div>
        )
    }else{
        return null
    }
 
}
