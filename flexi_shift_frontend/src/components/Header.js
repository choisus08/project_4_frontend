import { Link } from "react-router-dom";
import Lottie from 'lottie-react';
import Calendar from '../Calendar.json';

function Header(props) {
    return <nav className="Nav">
        <Link to='/' className="FlexiShift" style={{textDecoration: "none", color: "white"}}>FLEXI SHIFT</Link>
        <Lottie className='CalendarAnimation' animationData={Calendar} />
    </nav>

}

export default Header;