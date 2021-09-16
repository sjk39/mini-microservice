import React, { useState } from 'react';
import axios from 'axios';
const PostCreate = () => {
    const [title , setTitle] = useState('');
    const onSubmit = async (event) => {
        // Prevent default form submission 
        event.preventDefault();

        await axios.post('http://posts.com/posts/create', {
            title 
        }).catch((err) => {
            console.log(err.message);
          });
        // Clear input after submission
        setTitle('');
        //Refresh Page
        window.location.reload();
    };
    return <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Title</label>
                <input value={title} 
                onChange={e => setTitle(e.target.value)} 
                className="form-control"/>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>;
};
export default PostCreate;