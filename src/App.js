import './App.css';
import {getPost, getPosts} from "./services/api";
import {useEffect, useState} from "react";
import Posts from "./components/posts/posts";
import PostDetails from "./components/postDetails/postDetails";

function App() {
  const [posts, setPosts] = useState([])
  const [postDetails, setPostDetails] = useState(null)

  useEffect(() => {
    getPosts().then(response => {
      setPosts(response.data);
    })
  }, [])

  function selectPost(id){
    getPost(id).then(value => setPostDetails(value.data))
  }

  return (
    <div>
        <Posts items={posts} selectPost={selectPost}/>
      <hr />
        {
          postDetails && <PostDetails detail={postDetails}/>
        }
    </div>
  );
}

export default App;
