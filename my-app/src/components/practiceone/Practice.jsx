// import { useState } from "react";
import "../../App.css";
function Practice({name, age, city, hobbies, hobbiesTwo}) {
//     const theme = true;
//   const themes = theme ? "visible" : "unvisible";
// const {name,age,city} = props;
// const [count,setcount] = useState(5)  
// const [count,setcount] = useState(5)  
return(
    <>
    <h1>hello world</h1>
<h1>Name: {name}</h1>
<p>Age: {age}</p>
<p>city: {city}</p>

<ul>
    {
        hobbies?.map((value, index)=>(
            <li key={index}>{value}</li>
        ))
    }
</ul>
<ul>
    {
        hobbiesTwo?.map((value, index)=>(
            <li key={index}>{value}</li>
        ))
    }
</ul>




{/* <p>{hobbies[0]}</p>
<p>{hobbies[1]}</p>
<p>{hobbies[2]}</p> */}
{/* <h1>login successfully</h1>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, odit.</p>
*/}
    
    
    </>
)


}

// ! if you want to write each hobbie in ul li use map() function like this
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
