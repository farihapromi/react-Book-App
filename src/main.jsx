import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import Home from './components/Home/Home.jsx'
import Dashboard from './components/Dashbaord/Dashboard.jsx'
import BookDetail from './components/BookDetails/BookDetail.jsx'
import ListedBooks from './components/ListedBooks/ListedBooks.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PagesRead from './components/PagesRead/PagesRead.jsx'


const router=createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },{
        path:'dashboard',
        element:<Dashboard/>
      },{
        path:'/books/:bookId',
        element:<BookDetail/>,
        loader:()=>fetch('/booksData.json')
      },
      {
        path:'/listed-books',
        element:<ListedBooks/>,
        loader:()=>fetch('/booksData.json')
      },
      {
        path:'/pages-to-read',
        element:<PagesRead/>
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>

  </StrictMode>,
)
