import Post from '../components/Post';
import { useLoaderData } from 'react-router-dom';
import { Form } from 'react-router-dom';

const Index = (props) => {

    // fetch the loaderdata using the useLoaderData hook
    const shifts = useLoaderData()
    // For each post in the array render a Post component
    return <>
        <div>
            <div className='Form'>
                <Form action='/create' method='post'>
                    <h2 className='ShiftForm'>Shift Form</h2>
                    <div className='EmployeeNameContainer'>
                        <label>Employee Name</label><br></br>
                        <div className='NameContainer'> 
                            <input className='NameBox' type="text" name="name" placeholder='First Name' />
                            <input type="text" name="name" placeholder='Last Name' />
                        </div>
                    </div>
                    <div className='PositionContainer'>
                        <label className='Position'>Position</label>
                        <input type="text" name="position" placeholder='Job Title' />
                        <label className='Date'>Shift Date</label>
                        <input type="date" name="date" id="date" /><br></br>     
                    </div>
                    <div className='TimeContainer'>
                        <label className='Start'>Start Time</label>
                        <input type="time" name="start_time" id="start_time" />
                        <label className='End'>End Time</label>
                        <input type="time" name="end_time" id="end_time" />
                    </div>
                    <button className='AddButton'>Add Shift</button>
                </Form>
            </div>
        </div>
    
        {shifts.map((shift) => <Post post={shift} key={shift.id} />)}
    </>
};

export default Index;