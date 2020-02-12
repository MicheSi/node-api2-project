import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PostsCard from './PostsCard';


const PostsList = props => {
    const [post, setPost] = useState([])

    useEffect(() => {
        axios
        .get('http://localhost:5000/api/posts')
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className='postsList'>
            {post.map(post => (
                <PostsCard
                 key={post.id}
                 id={post.id}
                 title={post.title}
                 contents={post.contents}
                />
            ))}

        </div>
    )
}

export default PostsList;