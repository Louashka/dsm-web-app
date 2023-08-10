import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
    const title = "Modular Building Units with Dual-State Compliance";
    return ( 
        <div className="root-layout">
            <header>
                <div className="navbar">
                    <h1>{ title }</h1>
                    <div className="links">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/fabrication">Fabrication</NavLink>
                        <NavLink to="/downloads">Downloads</NavLink>
                        <NavLink to="/projects">Projects</NavLink>
                    </div>
                </div>
            </header>

            <main>
                <div className="content">
                    <Outlet />
                </div>
            </main>
        </div>
     );
}
 
export default Layout;
