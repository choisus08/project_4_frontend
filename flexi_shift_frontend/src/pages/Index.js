import Post from '../components/Post';
import { useLoaderData } from 'react-router-dom';

const Index = (props) => {

    // fetch the loaderdata using the useLoaderData hook
    const shifts = useLoaderData()
    // For each post in the array render a Post component
    return shifts.map((shift) => <Post post={shift} key={shift.id} />)
};

export default Index;