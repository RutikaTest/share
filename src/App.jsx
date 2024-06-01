import React, { useState } from 'react'
import './App.css'
import Board from './Components/Board/Board'

function App() {
  const [Boards, setBoards] = useState([
    {
      id: Date.now() + Math.random() * 2,
      title: "To Do",
      cards: [
        {
          id: Date.now() + Math.random(),
          title: "Card 1",
          labels: [{
            text: "hold",
            color: "yellow",
          }],
          tag:[
            "design",
            "development",
            "content"
          ],
          desc: "bankj",
          startdate: "22-03-24",
          enddate: "25-03-24",
          priority:"3",
          pm:"Rashmi"
        },
        {
          id: Date.now() + Math.random(),
          title: "Card 2",
          labels: [{
            text: "medium",
            color: "orange",
          }],
          tag:[
            "design",
            "development",
            "content"
          ],
          desc: "bankj",
          startdate: "22-03-24",
          enddate: "25-03-24",
          priority:"3",
          pm:"Rashmi"
        }
      ]
    }
  ]);


  const addCard=(title,bid)=>{
    const card={
      id:Date.now()+Math.random(),
      title,
      labels:[],
      tasks:[],
      date:"",
      desc:"",
    };

    const index=Boards.findIndex((item)=>item.id==bid)
    if(index<0) return ;

    const tempBoards=[...Boards];
    tempBoards[index].cards.push(card);
    setBoards(tempBoards);
  }


  const removeCard=(cid,bid)=>{
    const bIndex=Boards.findIndex((item)=>item.id==bid);
    if(bIndex < 0) return;

    const cIndex=Boards[bIndex].cards.findIndex((item)=>item.id==cid);
    if(cIndex < 0) return;

    const tempBoards=[...Boards];
    tempBoards[bIndex].cards.splice(cIndex,1);
    setBoards(tempBoards);

  }

  return (
    <div className="app">
      <div className="app_boards_container">
        <div className="app_boards">
          {Boards.map((item) => (
            <Board key={item.id} board={item} />
          ))}
          {/* Additional boards */}
          <Board />
          <Board />
        </div>
      </div>
    </div>
  )
}

export default App
