import React from 'react';

const PostsCard = props => {
    return (
        <div className='postsCard'>
            <h2>{props.title}</h2>
            <p>{props.contents}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default PostsCard;