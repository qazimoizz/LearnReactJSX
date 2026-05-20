function Navbar() {
    const navbarStyle = {
        backgroundColor : "red",
        color : "white",
        fontSize : " 33px",
        fontFamily : "sans-serif",
        textAlign : "center"
    }
    const name ="qazi moiz"

    const myfunc  = (yourname) =>{
        return   yourname; 
    }


    return (
    <>
      <h1 style={navbarStyle}>Navbar</h1>
        <h2>{myfunc(name)}</h2>

    </>
  );
}

export default Navbar;
