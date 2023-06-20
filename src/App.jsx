import { Fragment } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {

  return (
   <Fragment>
    <Routes>
      <Route path='/' element={<Navbar/>}/>
    </Routes>
   </Fragment>
   
  )
}

export default App