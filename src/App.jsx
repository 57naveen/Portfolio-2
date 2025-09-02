
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Qualification from './components/Qualification/Qualification'
import ScrollUp from './components/ScrollUP/ScrollUp'
import Service from './components/Services/Service'
import Skills from './components/Skills/Skills'

function App() {


  return (
    <>
    <Header />
    <main className='main'>
      <Home />
      <About />
      <Skills/>
      <Service />
      <Qualification />
      <Contact />
     
    </main>

     <Footer />
     <ScrollUp />
    </>
  )
}

export default App
