import Practice from "./components/practiceone/Practice";
// import PraticetTwo from "./components/practicetwo/PraticetTwo";
import "./App.css";
function App() {
  const hobbies = ["traveling", "Reading", "Gaming"];
  const hobbiesTwo =["traveling", "Reading", "Gaming", "cooking", "foodie", "Switzerland"];

  return (
  <>
  <Practice name="qazi moiz" age="21" city="Karachi" hobbies={hobbies}/>
  <Practice name="yumna" age="18" city="Karachi" hobbies={hobbies}/>
  <Practice name="ayra" age="4" city="Karachi" hobbies={hobbies}/>
  <Practice name="zulaykha" age="4" city="Karachi" hobbies={hobbies}/>
  <Practice name="Fred" age="4" city="Karachi" hobbies={hobbies}/>
  <Practice name="ellie" age="4" city="Karachi" hobbies={hobbies}/>
  <Practice name="Fredrickson and Ellie" age="4" city="Karachi" hobbies={hobbiesTwo}/>
  <Practice name="Fredrickson and Ellie" age="4" city="Karachi" hobbies={hobbiesTwo}/>
  <Practice name="Fredrickson and Ellie" age="4" city="Karachi" hobbies={hobbiesTwo}/>
  <Practice name="Fredrickson and Ellie" age="4" city="Karachi" hobbies={hobbiesTwo}/>
  <Practice name="Fredrickson and Ellie" age="4" city="Karachi" hobbies={hobbiesTwo}/>
  </>
)
}
// import reactLogo from './assets/react.svg'
// import Navbar from "./components/navbar/Navbar";
// import Button from "./components/button/Button";
/* <Button />
<br />
<Navbar /> */
//! first day code of Learning ReactJS
// return (
//   <>
//   <Navbar/>
//   <h1> hello world </h1>
//     <Button/>
//   <img src={reactLogo} width="200px" />

//    </>
//   )
export default App;
