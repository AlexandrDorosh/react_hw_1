import './posts.css';
import {useEffect, useState} from "react";
import Post from "./post/post";

export default function Posts() {
    const [postsList, setPostsList] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPostsList(value);
            })
    }, []);

    return(
        <div className='posts'>
            <h1>Posts</h1>
            {
                postsList.map(value => <Post key={value.id} items={value}/>)
            }
        </div>
        //  TODO hw_2
    )
}