import { Link, useLoaderData } from "react-router-dom";

const Show = (props) => {

    const post = useLoaderData()

    return <div>
        <h2>{post.name}</h2>
        <h3>{post.position}</h3>
        <h4>{post.date}</h4>
        <h4>{post.start_time}</h4>
        <h4>{post.end_time}</h4>
        <Link to='/'><button>Go Back</button></Link>
    </div>
};

export default Show;