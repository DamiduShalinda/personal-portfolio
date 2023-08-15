import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import AllProjetcs from "./AllProjetcs"
import ScrollToTopButton from "./components/ScrollToTopButton"
import { doc , getDocs , collection} from "@firebase/firestore"
import { db } from "./firebase-config"
import { useEffect, useState } from "react"
import { Project } from "./data"
import AdminPage from "./AdminPage"


function App() {

  const [projects, setProjects] = useState<Project[]>([])
  const projectsRef = collection(db, "allprojects")

  useEffect(() => {
    const getProjects = async () => {
        const doc_refs = await getDocs(projectsRef)
        if (doc_refs.empty) {
          console.log("No projects found")
        } else {
          const projects : Project = doc_refs.docs.map(doc => ({...doc.data(), id: doc.id}))
          setProjects(projects)
        }
    }
    getProjects()
  }, [])
 

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