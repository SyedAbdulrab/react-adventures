import { Fragment } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import SignUp from './components/pages/SignUp'
import Products from './components/pages/Products'
function App() {

  return (
   <Fragment>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/products' element={<Products/>}/>

    </Routes>
   </Fragment>
   
  )
}

export default App