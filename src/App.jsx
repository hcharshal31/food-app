import React, { useEffect } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import { Outlet, createBrowserRouter } from 'react-router-dom';
import MainBody from "./components/MainBody";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Order from './components/Order';
import Wallet from './components/Wallet';
import Profile from './components/Profile';

function App() {

  useEffect(() => {
    alert("Thanks for visiting us")
  }, [])

  return (
    <div className='bg-black h-screen flex w-full'>
      <div className='w-1/4'>
        <Sidebar />
      </div>
      <div className='w-3/4 p-5'>
        <Outlet />
      </div>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,       // default route
        element: <MainBody />,
      },
      {
        path: "home",
        element: <MainBody />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "orders",
        element: <Order />,
      },
      {
        path: "wallet",
        element: <Wallet />,
      },
      {
        path: "profile",
        element: <Profile />,
      }
    ],
  },
]);

export { appRouter };
export default App;