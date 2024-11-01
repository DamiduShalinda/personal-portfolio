import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import AllProjetcs from "./AllProjetcs"
import ScrollToTopButton from "./components/ScrollToTopButton"
import AdminPage from "./AdminPage"


function App() {


 

  return (
    <Router>
      <div className="bg-repeat bg-center bg-gradient-to-br from-slate-950 via-neutral-900 to-slate-950 cursor-default">
        
        <div className="bg-transparent">
          <Routes>
            <Route path="/admin" element={<AdminPage/>}/>
            <Route path="/allprojects" element={<AllProjetcs/>}/>
            <Route path="/" element={
              <>
              <ScrollToTopButton/>
              <Navbar />
               <section>
                <Home />
              </section>
              <section>
                <About />
              </section>
              <section>
                <Projects />
              </section>
              <section>
                <Skills />
              </section>
              </>
            }/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App


export const darker_color = "bg-slate-900"