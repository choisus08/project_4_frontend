import { Outlet, Link } from "react-router-dom";
import Lottie from 'lottie-react';
import Calendar from '../Calendar.json';

function Main(props) {
    return <div>
        <Lottie className="CalendarAnimation" animationData={Calendar}/>
        <div>
            <Link to='/register'><button>Register</button></Link>
            <Link to='/login'><button>Login</button></Link>
        </div>

        <Outlet />
    </div>
}

export default Main;