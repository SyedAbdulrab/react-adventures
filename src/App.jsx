import { Fragment } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/pages/Home'
function App() {

  return (
   <Fragment>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
   </Fragment>
   
  )
}

export default App