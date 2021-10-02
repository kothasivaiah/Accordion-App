import React,{useState} from 'react'
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'

const Question = ({title,info}) => {
    const [showInfo,setShowInfo] = useState(false)
  return (
  <artical className="question">
  <header>
      <h4>{title}</h4>
      <button classname="btn" onClick={()=> setShowInfo
         (!showInfo)}>
             {showInfo ? <AiOutlineMinus/>: <AiOutlinePlus/
             >}
         </button>
  </header>
  {showInfo && <p>{info}</p>}
  </artical>
  )
}

export default Question
