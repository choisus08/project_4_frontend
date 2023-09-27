import { Link, useLoaderData, Form } from "react-router-dom";
import Lottie from "lottie-react";
import Clock from '../Clock.json';

const Show = (props) => {

    const post = useLoaderData()

    return <div className="ShowContainer">
        <div className="ShiftName">
            <h1>{post.name}</h1>
            <div className="ShowInfo">
                <h3>{post.position}</h3>
                <h4>{post.date}</h4>
                <h4>{post.start_time} - {post.end_time}</h4>
            </div>
        </div>
    
        <div>
            <Form className="UpdateForm" action={`/update/${post.id}`} method='post'>
                <h2 className='UpdateHeader'>Update</h2>
                <Lottie className="ClockAnimation" animationData={Clock} />
                <div>
                    <label className="Name">Name</label>
                    <input type="text" name="name" defaultValue={post.name} />
                </div>
                <br></br>
                <div>
                    <label className="Name">Position</label>
                    <input type="text" name="position" defaultValue={post.position} />
                    <label className="Date">Date</label>
                    <input type="date" name="date" defaultValue={post.date} />
                </div>
                <br></br>
                <label className="Name">Start</label>
                <input type="time" name="start_time" defaultValue={post.start_time} />
                <label className="End">End</label>
                <input type="time" name="end_time" defaultValue={post.end_time} /><br></br>
                <button className="Update">Edit</button>
                
            </Form>

            <Form method='delete' action={`/delete/${post.id}`}>
                <button className="Delete">Delete</button>
            </Form>
        </div>
    </div>
};

export default Show;