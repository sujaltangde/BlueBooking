import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router";
import { useLocation, Navigate } from "react-router-dom";
import { About } from "./components/About/About";
import {ToastContainer} from 'react-toastify'
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Login } from "./components/Auth/Login";
import { Register } from "./components/Auth/Register";
import { NotFound } from "./components/NotFound/NotFound";
import { Support } from "./components/Support/Support";
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from "./components/Footer/Footer";
import {useSelector, useDispatch} from 'react-redux'
import { logOrNot } from "./actions/UserActions";



function App() {
  const [path, setPath] = useState("");

  let location = useLocation();

  const dispatch = useDispatch()
  const { isLogin } = useSelector(state => state.user)


//   useEffect(() => {

//     dispatch(me());

// }, [dispatch,isLogin]);


useEffect(() => {
  const LogOrNot = () => {
    dispatch(logOrNot());
  }
  LogOrNot()
}, []);

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  return (
    <>
      {path === "/404" ||
      path === "/auth/login" ||
      path === "/auth/register" ? null : (
        <Navbar />
      )}
      <Routes>
        
        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route path="/404" element={<NotFound />} />
        

        <Route exact path="/" element={<Home />} />

        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />

        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>

      <Footer/>


      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className="mt-14 font-bold  "

      />
    </>
  );
}

export default App;
