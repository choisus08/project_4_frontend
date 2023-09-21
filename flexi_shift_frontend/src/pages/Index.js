import Post from '../components/Post';
import { useLoaderData } from 'react-router-dom';
import { Form } from 'react-router-dom';

const Index = (props) => {

    // fetch the loaderdata using the useLoaderData hook
    const shifts = useLoaderData()
    // For each post in the array render a Post component
    return <>
        <div>
            <Form action='/create' method='post'>
                <input type="text" name="name" placeholder='Name' />
                <input type="text" name="position" placeholder='Position' />
                <input type="date" name="date" id="date" />
                <input type="time" name="start_time" id="start_time" />
                <input type="time" name="end_time" id="end_time" />
                <button>Add Shift</button>
            </Form>
        </div>
    
        {shifts.map((shift) => <Post post={shift} key={shift.id} />)}
    </>
};

export default Index;