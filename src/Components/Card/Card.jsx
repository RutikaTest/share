import React, { useState } from 'react'
import {  Clock, Edit2, MoreHorizontal } from "react-feather";
import './Card.css'
import Chip from '../Chips/Chip';
import Dropdown from '../Dropdown/Dropdown';

export default function Card(props) {
  const [showDropdown,setShowDropdown]=useState(false);

 
  return (
    <div className="card">
      <div className="card_top">
      <div className="card_top_labels">
        {
          props.card?.labels?.map((item,index)=><Chip key={index} text={item.text} color={item.color}/>)
        }      
     </div>
     <div
          className="board_header_title_more"
          onClick={() => setShowDropdown(true)}  
        >
     <MoreHorizontal/>
     {
          showDropdown &&(
       
        <Dropdown onClose={()=>setShowDropdown(false)}>
            <div className="board_dropdown">
            <p>Delete Board</p>  
            </div>           
          </Dropdown>
        )}
        </div>
     </div>   
     <div className="card-title">
      {props.card?.title}
      </div> 
      <p className="card_tag_item">
      {props.card?.tag}
      </p>
      <div className='description'>
      {props.card?.desc}
      <span>{' '}</span>
      {props.card?.pm}
      </div>
      <div className='card_footer'>
        <p  className="card_footer_item">
          <Clock className="card_footer_icon"/>
          `{props.card?.startdate}/{props.card?.enddate}`</p>
      <p className="card_footer_item">
         <Edit2 className="card_footer_icon" />
         {props.card?.priority}
       </p>
       </div>
  </div>
  )
}
