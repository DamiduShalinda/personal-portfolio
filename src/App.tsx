import { Routes, Route } from "react-router-dom"
import About from "./components/About"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import UpdatedNavbar from "./components/UpdatedNavbar"


function App() {

  return (
    <div>
    <UpdatedNavbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </UpdatedNavbar>
    
    </div>
  )
}

export default App


export const darker_color = "bg-slate-900"