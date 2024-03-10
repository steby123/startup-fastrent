import { NavLink} from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    return(
        <div className="Navbar">
            <div className="logo"></div>
            <nav className="navigation">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Car">Car</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About-us">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
            <div className='btn'>
                <p className='button'>Cart (0)</p>
            </div>
        </div>
    )
}

export default Navbar;