import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login'
import {createBrowserRouter, Outlet} from "react-router-dom"
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

const  App = () => {
  return (
    <div className="">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export const approuter = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <AboutUs/>
      },
      {
        path: '/contact',
        element:<Contact/>
      }
      
    ]
  },
  {
    path: '/login',
    element: <Login/>
  }
  
])



export default App;
