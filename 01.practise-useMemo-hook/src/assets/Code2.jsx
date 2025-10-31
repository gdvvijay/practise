import { useCallback, useState } from "react"

export default function Code2(){
    const [count,setCount]=useState(0)
    function Callback(){
        console.log('useCallback hook')
    }
    // Callback()

    const handleFunction=useCallback(()=>{
        Callback()
    },[])
    return(
        <div>
            
            <button onClick={()=>setCount(count+1)}>increment</button>
            <button onClick={()=>handleFunction()}>runFunction</button>
        </div>
    )
}