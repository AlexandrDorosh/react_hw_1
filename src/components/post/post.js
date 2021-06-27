import './post.css';

export default function Post({item, selectPost}){
    return(
        <div>
            {item.id} - {item.title} - <button onClick={() => {selectPost(item.id)}}>show more info</button>
        </div>
    )
}