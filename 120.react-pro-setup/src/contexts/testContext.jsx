import { createContext, useState } from "react";

export const testContext=createContext()

export default function TestProvider({children}){
 const [test,setTest]=useState('vijay')
  return(
      <testContext.Provider value={[test,setTest]}>
        {
            children
        }
    </testContext.Provider>
  )
}