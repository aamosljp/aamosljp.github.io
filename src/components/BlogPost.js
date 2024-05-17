import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:1337/api/blogs/${id}`).then(response => {
      setPost(response.data['data']);
    }).catch(error => console.error("Error fetching blog post: ", error));
  }, [id]);

  if (!post) return <div className="container mx-auto p-4">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="dark:text-blue-300 text-3xl font-bold mb-4 transition duration-300">{post.attributes.title}</h2>
      <div className="dark:text-blue-200" dangerouslySetInnerHTML={{ __html: post.attributes.content }} />
    </div>
  );
};

export default BlogPost;

