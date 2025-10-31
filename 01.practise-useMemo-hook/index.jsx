import {createRoot} from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './src/assets/App'
import Error from './src/assets/Error'
import Code from './src/assets/Code'
import Code2 from './src/assets/Code2'

const root=createRoot(document.querySelector('#root'))

const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Code/>
            },
            {
                path:'/code2',
                element:<Code2/>
            }
        ]

    }
])

root.render(<RouterProvider router={router}/>)