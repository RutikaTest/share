import React, { useEffect } from 'react'
import { useRef } from 'react';
import './Dropdown.css'

export default function Dropdown(props) {
    const dropdownRef=useRef();

    const handleClick=(e)=>{
        if(dropdownRef && dropdownRef.current.contains(e.target)){
            if( props.onClose)
                {
                    props.onClose()
                } 
        }
           
    };

    useEffect(()=>{
        document.addEventListener('click',handleClick)
        return ()=>{
            document.removeEventListener('click',handleClick)
        }
    })
  return (
    <div ref={dropdownRef} className="dropdown" style={{
        position:"absolute",
        top:"100%",
        right:"0"
    }}>
       {props.children}
    </div>
  )
}
