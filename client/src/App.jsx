import { Routes, Route } from "react-router"
import { About } from "./components/About/About"
import { NumIncrDecr } from "./components/Test/NumIncrDecr"

function App() {


  return (
    <>

<Routes>    

{/* <Route path="*" element={<NotFound />} /> */}
{/* <Route exact path="/" element={<Home />} /> */}

<Route path="/about" element={<About />} />
<Route path="/" element={<NumIncrDecr/>} />

</Routes>    

    </>
  )
}

export default App
