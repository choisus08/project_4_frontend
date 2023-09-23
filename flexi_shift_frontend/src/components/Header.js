import { Link } from "react-router-dom";

function Header(props) {
    return <nav className="Nav">
        <Link to='/'>Flexi Shift</Link>
    </nav>
}

export default Header;