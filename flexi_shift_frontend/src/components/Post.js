import { Link } from "react-router-dom";

const Post = ({post}) => {

    return <div className="ShiftCards" style={{textDecoration: "none", color: "white"}}>
        <Link to={`/post/${post.id}`} style={{textDecoration: "none", color: "white"}}>
            <h2>{post.name}</h2>
        </Link>
        <h3>{post.position}</h3>
        <h4>{post.date}</h4>
        <h4>{post.start_time} - {post.end_time}</h4>
    </div>
};

export default Post;