import { useCallback } from "react"

export default function Callback(){
    function callbackHook(count=0){
        console.log(count)  
    }
    const callbackVariable=useCallback(callbackHook,[])
    console.log(callbackVariable(12))
    
    return(
        <>
            <div>Call-back Component</div>
            <button>count</button>
        </>
    )
}