import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  )
}

export default App
