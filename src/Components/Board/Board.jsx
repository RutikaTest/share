import { useState } from "react";
import { MoreHorizontal } from "react-feather";
import './Board.css';
import React from 'react'
import Card from "../Card/Card";
import Adddata from "../Adddata";

export default function Board(props) {

  return (
    <div className="board">
      <div className="board_header">
        <p className="board_header_title">
           {props.board?.title}<span>{`${props.board?.cards?.length}`} </span>
        </p>
        <MoreHorizontal/>
        </div>
        <div className="board_cards custom-scroll">
          {
            props.board?.cards?.map((item)=>(
              <Card key={item.id} card={item}/>
            ))
          }
           <Card/>      
           <Card/>    
           <Card/>
           <Card/>      
           <Card/>    
           <Card/> 
           <Adddata/>  
        </div>
        </div>
  )
}
