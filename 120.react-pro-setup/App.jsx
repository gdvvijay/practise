import {createRoot} from 'react-dom/client'
import MainComponent from './src/components/MainContent'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dynamic from './src/components/Dynamic'
import Dynamic1 from './src/components/Dynamic1'
import Callback from './src/components/Callback'

const root=createRoot(document.querySelector('#root'))

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainComponent/>,
        children:[
            {
                path:'/usememo',
                element:<Dynamic/>
            },
            {
                path:'/:dynamic',
                element:<Dynamic1/>
            },
            {
                path:'/callback',
                element:<Callback/>
            }
        ]
    }
])
root.render(<RouterProvider router={router}></RouterProvider>)