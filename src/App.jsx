
import './App.css'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Experience from './components/Experience'
import About from './components/About'
import SocialLink from './components/SocialLink'
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <main className='max-w-[1440px] h-full bg-black mx-auto font-sen'>
      <NavBar/>
      <Home/>
      <Experience/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
      <SocialLink/>
    </main>
  )
}

export default App
