import About from "./components/About"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"


function App() {

  return (
    <div>
    <Navbar />
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Footer/>
    </div>
  )
}

export default App


export const darker_color = "bg-slate-900"