import { Link } from 'react-router-dom';

const Navbar = () => {
    const title = "Modular Building Units with Dual-State Compliance";
    return ( 
        <div className="navbar">
            <h1>{ title }</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/fabrication">Fabrication</Link>
                <Link to="/downloads">Downloads</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </div>
     );
}
 
export default Navbar;