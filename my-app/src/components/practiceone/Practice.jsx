import "../../App.css";
function Practice({name, age, city, hobbies}) {
//     const theme = true;
//   const themes = theme ? "visible" : "unvisible";
// const {name,age,city} = props;
  return(
    <>
<h1>Name: {name}</h1>
<p>Age: {age}</p>
<p>city: {city}</p>
// ! if you want to write each hobbie in ul li use map() function
<p>{hobbies[0]}</p>
<p>{hobbies[1]}</p>
<p>{hobbies[2]}</p>
{/* <h1>login successfully</h1>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, odit.</p>
     */}
    
    
    </>
)


}

/* <div>
    {theme ==="black" ? <h1>yes theme is black</h1> : <h2>no its white</h2>}
</div> */

//   if (theme === "black") {
//     return <h1>yes theme is black</h1>;
//   } else {
//     <h2>theme is white</h2>;
//   }


//   const users = [
//     { name: "qazimoiz", lastname: "ur rehman", Course: "WebDevelpment" },
//     { name: "yumna", lastname: "ur rehman", Course: "CyberSecurity" },
//     { name: "ayra", lastname: "ur rehman", Course: "Ai inteliigence" },
//   ];
//   const fullName = (kala) => {
//     return kala.name + " " + kala.lastname;
//   };
//   return (
//     <>
//       <h1>Family detail</h1>
//       <ul>
//         {users.map((value, index) => (
//           <li key={index}>
//             {fullName(value)} and there course {value.Course}
//           </li>
//         ))}
//       </ul>
//     </>
//   );

export default Practice;
