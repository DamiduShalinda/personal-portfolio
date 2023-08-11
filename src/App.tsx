import About from "./components/About"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import UpdatedNavbar from "./components/UpdatedNavbar"


function App() {

  return (
    <div>
    <UpdatedNavbar/>
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