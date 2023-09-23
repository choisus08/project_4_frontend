import { Link } from "react-router-dom";

const Post = ({post}) => {

    return <div>
        <Link to={`/post/${post.id}`}>
            <h2>{post.name}</h2>
        </Link>
        <h3>{post.position}</h3>
        <h4>{post.date}</h4>
        <h4>{post.start_time}</h4>
        <h4>{post.end_time}</h4>  
    </div>
};

export default Post;