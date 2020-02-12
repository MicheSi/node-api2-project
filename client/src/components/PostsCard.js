import React from 'react';

const PostsCard = props => {
    return (
        <div className='postsCard'>
            <h2>{props.title}</h2>
            <p>{props.contents}</p>
        </div>
    )
}

export default PostsCard;