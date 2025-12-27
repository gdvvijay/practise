import { useMemo, useRef, useState } from "react"

export default function Dynamic(){
    const expensiveValue=useRef(0)
    const [count,setCount]=useState(0)
    console.time()
    function expensiveComputation(){
        for(let i=0;i <= 1000000;i++){
            if(i%2==0){
                for(let j=0;j <= 500; j++){
                    expensiveValue.current += (j)
                }
            }
        }
        return 'hi'
    }
    // expensiveComputation()
    const calculation=useMemo(()=>expensiveComputation(),[])
    console.log(calculation)
    console.timeEnd()

    console.log(expensiveValue.current)

    return(
        <>
        <div>default Component</div>
        <p>{count}</p>
        <button onClick={()=>setCount(prev=>prev+1)}>Count+</button>
        </>
    )
}