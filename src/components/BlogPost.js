import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:1337/blog-posts?slug=${slug}`).then(response => {
      setPost(response.data[0]);
    });
  }, [slug]);

  if (!post) return <div className="container mx-auto p-4">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default BlogPost;

