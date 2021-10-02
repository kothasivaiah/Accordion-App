import React,{useState} from 'react'
import './App.css'
import Data from './Data'
import SingleQuestion from './Question'



const App = () => {
  const [questions,setQuestions] = useState(Data)
  return (
    <main>
    <div classname="container">
   <h3>Questions and answers about login</h3>
   <section className="info">
     {
       questions.map((question) => {
         return (
         <SingleQuestion key={question.id} {...question}></SingleQuestion>
         )
       })

     }

   </section>
    </div>
    </main>
  )
}

export default App
