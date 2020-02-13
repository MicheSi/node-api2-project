import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

const PostsCard = props => {
    console.log(props);

    const initialState = {
        title: '',
        contents: ''
    }

    const [post, setPost] = useState(initialState)

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    useEffect(() => {
        const postToEdit = props;
        if (postToEdit) {
            setPost(postToEdit);
        }
    }, [props])

    const onChange = e => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }

    const editPost = e => {
        e.preventDefault()
        axios
        .put(`http://localhost:5000/api/posts/${props.id}`, post)
        .then(res => {
            console.log('post updated', res)
            window.location.reload();
        })
        .catch(err => console.log(err))
    }

    const deletePost = e => {
        e.preventDefault();
        axios
        .delete(`http://localhost:5000/api/posts/${props.id}`)
        .then(res => {
            console.log(res)
            window.location.reload();
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='postsCard'>
            <h2>{props.title}</h2>
            <p>{props.contents}</p>
            <Button color="danger" onClick={toggle}>Edit</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Edit Post</ModalHeader>
                <ModalBody>
                    <Form onSubmit={editPost}>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input type="text" name="title" id="title" value={post.title} onChange={onChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="contents">Contents</Label>
                            <Input type="textarea" name="contents" id="contents" value={post.contents} onChange={onChange} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={editPost}>Update</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
            <Button onClick={deletePost}>Delete</Button>
        </div>
    )
}

export default PostsCard;