import { Link } from "react-router-dom";

function Header(props) {
    return <nav className="Nav">
        <Link to='/' style={{textDecoration: "none", color: "white"}}>FLEXI SHIFT</Link>
    </nav>
}

export default Header;