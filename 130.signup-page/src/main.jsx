import {createRoot} from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App'
import SignUp from './components/SignUp'

const root=createRoot(document.querySelector('#root'))
const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/maincontent',
                elements:<SignUp/>
            }
        ]
    }
])

root.render(<RouterProvider router={router}></RouterProvider>)