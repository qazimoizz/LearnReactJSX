function Navbar() {
    const navbarStyle = {
        backgroundColor : "red",
        color : "white",
        fontSize : " 33px",
        fontFamily : "sans-serif",
        textAlign : "center"
    }
    const myfunc  = (yourname) =>{
        return   yourname; 
    }
    const someMessage = ()=>{
        alert("button was clicked")
    }    
    
    const name ="qazi moiz";

    const age =18;

    const handleOver = () => console.log("mouse is over the text!");

    const handleDoubleClick = () => console.log("mouse is doubleClicked !");

    const handleInput = (event)=> {
        console.clear();
        
        console.log("value :", event.target.value );
        
    }
    return (
    <>
      <h1 style={navbarStyle}>Navbar</h1>
        <h2>{myfunc(name)}</h2>
        <h3>{myfunc(age)}</h3>

        <p onMouseOver={handleOver} onDoubleClick={handleDoubleClick} > Lorem ipsum dolor sit amet.</p>

        <button onClick={someMessage}>CLick me </button>
        <button onClick={ ()=>{ alert("hell yeahhh")} }> just click me</button>
        <br />
        <input type="text" onChange={handleInput} placeholder="write something" />
    
    
    </>
  );
}

export default Navbar;
