import "./Button.css";

function Button({onClick,counter}) {

 return (
  <>
 {/* <button onClick={change}>{label}</button> */}
 <h2>counter: {counter}</h2>
 <button onClick={onClick}>Click the button</button>
  </>
 
)
}
// let fruits = ["apple", "mango", "banana", "leechy"];

// return (
//   <div>
//     <h1> Fruits </h1>

//     <ul>
//       {fruits.map((fruit, index) => (
//         <li key={index}>
//           {" "}
//           {index} - {fruit}
//         </li>
//       ))}
//     </ul>
//   </div>
// );
//! first day code of Learning ReactJS
// const fullName = "Qazi moiz ur Rehman";
// return (
//   <>
//     <div className="btn">Button</div>

//     <p>{fullName}</p>
//   </>
// );

export default Button;
