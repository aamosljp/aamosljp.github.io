import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MarkdownRenderer from './MarkdownRenderer';

const BlogPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`https://passionate-fruit-347d6d7acb.strapiapp.com/api/blogs/${id}`).then(response => {
            setPost(response.data['data']);
        }).catch(error => console.error("Error fetching blog post: ", error));
    }, [id]);

    if (!post) return <div className="container mx-auto p-4">Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <h2 className="mb-4 transition duration-300">{post.attributes.title}</h2>
            <MarkdownRenderer content={post.attributes.content} />
        </div>
    );
};

export default BlogPost;

