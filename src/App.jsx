import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Promo from './components/Promo'
import Plan from './components/Plan'
import Products from './components/Products'
import Build from './components/Build'
import ADP from './components/ADP'
import Links from './components/Links'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Banner />
      <Promo />
      <Plan />
      <Products />
      <Build />
      <ADP />
      <Links />
      <Footer />
      
    </>
  )
}

export default App
