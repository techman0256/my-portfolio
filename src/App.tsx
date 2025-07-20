import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import AboutMe from './AboutMe'
import Navbar from './Navbar'
import './App.css'
import Projects from './Projects'
import Contacts from './Contacts'
import SpotLightEffect from "./utils/SpotLightEffect";

function App() {

  return (
    <>
        <div className='route'>
          <Router>
              <SpotLightEffect>
                <div className='route-content min-h-screen'>
                    <Navbar></Navbar>
                    <Routes>
                      <Route path='/'  element={<Home></Home>}/>
                      <Route path='/projects' element={<Projects></Projects>}></Route>
                      <Route path='/about-me'  element={<AboutMe></AboutMe>}/>
                      <Route path='/contacts'  element={<Contacts></Contacts>}/>
                    </Routes>
                </div>
              </SpotLightEffect>
          </Router>
        </div>
    </>
  )
}

export default App
