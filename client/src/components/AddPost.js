import React, {useState} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

const AddForm = props => {
    const initialState = {
        title: '',
        contents: ''
    }

    const [newPost, setNewPost] = useState(initialState)

    const handleChange = e => {
        setNewPost({
            ...newPost,
            [e.target.name]: e.target.value
        })
    }

    const addPost = e => {
        e.preventDefault()
        axios
        .post('http://localhost:5000/api/posts', newPost)
        .then(res => {
            setNewPost(res.data)
            window.location.href = '/'
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='addContainer'>
            <h1>Add New Post</h1>
            <Form onSubmit={addPost} className='addForm'>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input required type="text" name="title" id="title" value={newPost.title} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="contents">Contents</Label>
                    <Input required type="textarea" name="contents" id="contents" value={newPost.contents} onChange={handleChange} />
                </FormGroup>
                <Button color='primary'>Add</Button>
            </Form>
        </div>
    )
}

export default AddForm;