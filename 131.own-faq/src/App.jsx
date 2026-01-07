import { Fragment, useState } from 'react';
import './App.css'

function App() {
  const [isOpen,setIsOpen]=useState({1:false,2:false,3:false})
const faqData = [
  {
    id: 1,
    question: 'What is React?',
    answer: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.'
  },
  {
    id: 2,
    question: 'What are React components?',
    answer: 'Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.'
  },
  {
    id: 3,
    question: 'What is state in React?',
    answer: 'The state is a built-in React object that is used to contain data or information about the component. A component’s state can change over time; whenever it changes, the component re-renders.'
  },
];
function handleOP(id){
  setIsOpen(prev=>({...prev,[id]:!prev[id]}))
  
}
console.log(isOpen)
  return (
    <>
     <section className="max-w-6xl mx-auto">
      {
        faqData.map(item=>{
          return(
            <Fragment key={item.id}>
              <div onClick={()=>handleOP(item.id)} className="mt-2.5 ">
                <h2 className="bg-[#00000039] cursor-pointer">{item.question}</h2>
                <p className={`${isOpen[item.id] ? 'max-h-40' : 'max-h-0'}  overflow-hidden transition-all duration-500 ease-in-out`}>{item.answer}</p>
              </div>
            </Fragment>
          )
        })
      }
     </section>
    </>
  )
}

export default App
