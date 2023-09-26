import { Link } from "react-router-dom";
import Lottie from 'lottie-react';
import Calendar2 from '../Calendar2.json';

function Header(props) {
    return <nav className="Nav">
        <Link to='/' className="FlexiShift" style={{textDecoration: "none", color: "white"}}>FLEXI SHIFT</Link>
        <Lottie className='CalendarAnimation' animationData={Calendar2} />        
    </nav>

}

export default Header;