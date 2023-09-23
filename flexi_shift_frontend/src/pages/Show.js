import { Link, useLoaderData, Form } from "react-router-dom";

const Show = (props) => {

    const post = useLoaderData()

    return <div>
        <div className="ShowHeader">
            <h2>{post.name}</h2>
            <Link to='/'><button className="Home">Home</button></Link>
        </div>
        <div className="ShowInfo">
            <h3>{post.position}</h3>
            <h4>{post.date}</h4>
            <h4>{post.start_time}</h4>
            <h4>{post.end_time}</h4>
        </div>
        <div>
            <Form className="UpdateForm" action={`/update/${post.id}`} method='post'>
                <h2 className='UpdateForm'>Update</h2>
                <label>Name</label>
                <input type="text" name="name" defaultValue={post.name} />
                <input type="text" name="lastname" defaultValue={post.name} /><br></br>
                <label>Position</label>
                <input type="text" name="position" defaultValue={post.position} />
                <label>Date</label>
                <input type="date" name="date" defaultValue={post.date} /><br></br>
                <label>Start</label>
                <input type="time" name="start_time" defaultValue={post.start_time} />
                <label>End</label>
                <input type="time" name="end_time" defaultValue={post.end_time} /><br></br>
                <button className="Update">Edit</button>
            </Form>
        </div>
        <div>
            <Form method='delete' action={`/delete/${post.id}`}>
                <button className="Delete">Delete</button>
            </Form>
        </div>
    </div>
};

export default Show;