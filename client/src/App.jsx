import { Routes, Route } from "react-router"
import { About } from "./components/About/About"
import { NumIncrDecr } from "./components/Test/NumIncrDecr"
import { Home } from "./components/Home/Home"
import { Navbar } from "./components/Navbar/Navbar"

function App() {


  return (
    <>
<Navbar/>

<Routes>    

{/* <Route path="*" element={<NotFound />} /> */}
<Route exact path="/" element={<Home/>} />

<Route path="/about" element={<About />} />


</Routes>    

    </>
  )
}

export default App
