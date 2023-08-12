import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"


function App() {

//style={{ backgroundImage: `url(${placeholder})` }}
  return (
    <div className="bg-repeat bg-center bg-slate-950 cursor-default"  > 
    <Navbar />
    <div className="bg-transparent">
      <section><Home/></section>
      <section><About/></section>
      <section><Projects/></section>
      <section><Skills/></section>
    </div>
    </div>
  )
}

export default App


export const darker_color = "bg-slate-900"