import './postDetails.css';

export default function PostDetails({detail}){
    return(
        <div>
                <strong>{detail.body}</strong>
        </div>
    )
}