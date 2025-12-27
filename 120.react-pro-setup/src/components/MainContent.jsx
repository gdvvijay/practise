import { Outlet } from "react-router-dom";
import TestProvider from "../contexts/TestContext";
import { useEffect, useState } from "react";

export default function MainComponent(){

    return(
        <div  >
            <div>Header</div>
                <TestProvider>
                    <Outlet/>
                </TestProvider>
            <div>Footer</div>
        </div>
    )
}