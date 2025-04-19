import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import AboutMe from './AboutMe'
import Navbar from './Navbar'
import './App.css'
import Projects from './Projects/projects'

function App() {

  return (
    <>
      <div className='route'>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path='/'  element={<Home></Home>}/>
            <Route path='/projects' element={<Projects></Projects>}></Route>
            <Route path='/about-me'  element={<AboutMe></AboutMe>}/>
          </Routes>

        </Router>
      </div>
    </>
  )
}

export default App
