import Button from "./components/button/Button"
import reactLogo from './assets/react.svg' 
import Navbar from "./components/navbar/Navbar"
import './App.css'
function App() {
 
return ( 
  <>
  <Navbar/>
  <h1> hello world </h1>
    <Button/>
  <img src={reactLogo} width="200px" />


   </>
  )
}

export default App
