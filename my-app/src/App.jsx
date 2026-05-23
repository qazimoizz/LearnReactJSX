import Practice from "./components/practiceone/Practice";
import Button from "./components/button/Button";
// import PraticetTwo from "./components/practicetwo/PraticetTwo";
import "./App.css";
import { useState } from "react";
function App() {
  const hobbies = ["traveling", "Reading", "Gaming"];
  const hobbiesTwo = [
    "traveling",
    "Reading",
    "Gaming",
    "cooking",
    "foodie",
    "Switzerland",
  ];
  // function handleClick() {
  //   return alert("button is clicked");
  // }

  const [counter, setCount] = useState(0);

  return (
    <>
      <Practice name="qazi moiz" age="21" city="Karachi" hobbies={hobbies} />
      <Practice name="yumna" age="18" city="Karachi" hobbies={hobbies} />
      <Practice name="ayra" age="4" city="Karachi" hobbies={hobbies} />
      <Practice name="zulaykha" age="4" city="Karachi" hobbies={hobbies} />
      <Practice name="Fred" age="4" city="Karachi" hobbies={hobbies} />
      <Practice name="ellie" age="4" city="Karachi" hobbies={hobbies} />
      <Practice
        name="Fredrickson and Ellie"
        age="4"
        city="Karachi"
        hobbies={hobbiesTwo}
      />
      {/* <Button label="Click Me" handleClick={handleClick} /> */}
      <Button onCLick={()=> setCount(counter + 1)} counter={counter}/>
    </>
  );
}
// import Navbar from "./components/navbar/Navbar";
// import reactLogo from './assets/react.svg'
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
