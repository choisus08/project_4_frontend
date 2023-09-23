import { Link, useLoaderData, Form } from "react-router-dom";

const Show = (props) => {

    const post = useLoaderData()

    return <div>
        <h2>{post.name}</h2>
        <h3>{post.position}</h3>
        <h4>{post.date}</h4>
        <h4>{post.start_time}</h4>
        <h4>{post.end_time}</h4>
        <div>
            <Form action={`/update/${post.id}`} method='post'>
                <input type="text" name="name" defaultValue={post.name} />
                <input type="text" name="position" defaultValue={post.position} />
                <input type="date" name="date" defaultValue={post.date} />
                <input type="time" name="start_time" defaultValue={post.start_time} />
                <input type="time" name="end_time" defaultValue={post.end_time} />
                <button>Update Shift</button>
            </Form>
        </div>
        <div>
            <Form method='delete' action={`/delete/${post.id}`}>
                <button>Delete</button>
            </Form>
        </div>

        <Link to='/'><button>Go Back</button></Link>
    </div>
};

export default Show;