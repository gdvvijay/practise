import { Outlet } from "react-router-dom";
import SignUp from "./components/SignUp";


export default function App(){
    return(
        <div className="flex justify-center">
            <SignUp/>
            <Outlet/>
        </div>
    )
}