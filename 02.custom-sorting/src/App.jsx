import { useState } from "react";

export default function App(){
  const [names, setNames] = useState(["Charlie", "Alice", "Aaice", "Bob", "Zoya", "David"]);
  const [sortFormat,setSortFormat]=useState(()=>()=>{})
  const sortedArray=names.sort(sortFormat);
  return(
    <div>
      <p>
        {
          sortedArray.map((sortedItem)=>{
           return <li>{sortedItem}</li>
          })
        }
      </p>
      <button onClick={()=>setSortFormat(()=>(a,b)=>a.localeCompare(b))}>A-Z sort</button>
      <button onClick={()=>setSortFormat(()=>(a,b)=>b.localeCompare(a))}>z-a sort</button>
    </div>
  )
}