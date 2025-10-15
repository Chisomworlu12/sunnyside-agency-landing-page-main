import { useState } from 'react'
import './styles.css'
import Header from './components/header.jsx'
import Hero from './components/hero.jsx'
import Services from './components/services.jsx'

function App() {
  {/*const [count, setCount] = useState(0)*/}

  return (
 <div className='flex flex-col'>
    <div  className="h-screen bg-[url('/images/mobile/image-header.jpg')] bg-center bg-no-repeat bg-cover md:bg-[url('/images/desktop/image-header.jpg')] lg:bg-no-repeat lg:bg-cover ">
    <div className=' lg:px-12 lg:py-10 p-12'>
      
      <Header/>
        <Hero/>
      </div>
      
    </div>
  <Services/>
    </div>
  )
}

export default App
