import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogList from './BlogList';
import BlogPost from './BlogPost';

const Blog = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const onSelectBlog = (blog) => {
        axios.get(`https://passionate-fruit-347d6d7acb.strapiapp.com/api/blogs/${blog.id}`).then(response => {
            setSelectedBlog(response.data['data']);
        }).catch(error => console.error("Error fetching blog post: ", error));
    };
    useEffect(() => {
        axios.get('https://passionate-fruit-347d6d7acb.strapiapp.com/api/blogs').then(response => {
            setBlogs(response.data['data']);
        }).catch(error => console.error("Error fetching blog posts: ", error));
    });
    return (
        <div className="container" style={{display: 'flex'}}>
            <BlogList blogs={blogs} onSelectBlog={onSelectBlog} selectedBlog={selectedBlog} />
            <BlogPost blog={selectedBlog} />
        </div>
    );
};

export default Blog;
