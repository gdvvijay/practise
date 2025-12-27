import { useContext } from "react"
import { useParams } from "react-router-dom"
import { testContext } from "../contexts/TestContext"

export default function Dynamic1(){
    const [test,setTest]=useContext(testContext)
    // setTest('hello')
    console.log(test)
    const {dynamic}=useParams()
    console.log(dynamic)
    return(
        <div>Dynamic Component</div>
    )
}