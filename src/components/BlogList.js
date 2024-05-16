import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/blog-posts').then(response => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Blog</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="mb-2">
            <Link className="text-blue-500 hover:underline" to={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;

