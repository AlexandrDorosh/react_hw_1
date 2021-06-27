import './posts.css';
import Post from "../post/post";

export default function Posts({items, selectPost}){
    return(
        <div>
            {
                items.map(value => <Post key={value.id} item={value} selectPost={selectPost} />)
            }
        </div>
    )
}