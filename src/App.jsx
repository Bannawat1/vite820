import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import fileResume from './assets/resume.pdf'
import './App.css'
import Header from './sections/Header'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'
import Navbar from './sections/Navbar'
import LeftSection from './sections/LeftSection'
import RightSection from './sections/RightSection'

function App() {
  const [count, setCount] = useState(0)
  return (
   <div className='mt-14 mx-auto max-w-6xl grid gap-y-4 lg:grid-cols-[40%_60%]'>
    <LeftSection />
    <RightSection />
   </div>
  )
}

export default App