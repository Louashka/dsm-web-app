const Navbar = () => {
    const title = "Modular Building Units with Dual-State Compliance";
    return ( 
        <div className="navbar">
            <h1>{ title }</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/fabrication">Fabrication</a>
                <a href="/downloads">Downloads</a>
                <a href="/projects">Projects</a>
            </div>
        </div>
     );
}
 
export default Navbar;