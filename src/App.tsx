import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import AboutMe from './AboutMe'
import Navbar from './Navbar'
import './App.css'

function App() {

  return (
    <>
      <div className='route'>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path='/'  element={<Home></Home>}/>
            <Route path='/about-me'  element={<AboutMe></AboutMe>}/>
          </Routes>

        </Router>
      </div>
    </>
  )
}

export default App
