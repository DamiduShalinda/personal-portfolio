import { Parallax } from "react-parallax"


function App() {

  return (
    <div>
     <Parallax strength={600} bgImage={'https://images.unsplash.com/photo-1505159401534-f62f81037389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'} >
       <div style={{height: 900}}>
         <h1 className="text-3xl">Test</h1>
       </div>
      </Parallax>
      <Parallax strength={600} bgImage={'https://images.unsplash.com/photo-1625217985336-3b3e7e4c2a6b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80'} >
        <div style={{height: 500}}>
          <h1>Test</h1>
        </div>
      </Parallax>
    </div>
  )
}

export default App
