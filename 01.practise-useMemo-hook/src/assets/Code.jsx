import { useMemo, useState } from "react"

export default function Code(){
    const [count,setCount]=useState(0)
   
    const heavyCalculation=useMemo(()=>{
        let evenNumberCount=0;
        for(let i=0;i<=1000000;i++){
            if(i % 2 === 0){
                evenNumberCount+=1
                
            }
        }

        return evenNumberCount;
    },[count])
    console.log(heavyCalculation)
    return(
        <div>
            <p>{heavyCalculation}</p>
            <button onClick={()=>setCount(count+1)} style={{marginTop:20}}>increment</button>
        </div>
    )
}