import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PostsCard from './PostsCard';
import {Button} from 'reactstrap';


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

    const onClick = e => {
        e.preventDefault()
        window.location.href = '/add'
      }

    return (
        <div className='postsContainer'>
            <h1>API2 Stretch Project</h1>
            <Button color='primary'className='addBtn' onClick={onClick}>Add Post</Button>
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
        </div>
    )
}

export default PostsList;