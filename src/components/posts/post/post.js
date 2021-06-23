import './post.css';

export default function Post({items}){
    let {userId, id, title, body} = items
    return(
        <div>
            <h2>Post {id}</h2>
            <div className='post'>
                <p>userId - {userId},</p>
                <p>id - {id},</p>
                <p>title - {title},</p>
                <p>body - {body}.</p>
            </div>
        </div>
    )
}