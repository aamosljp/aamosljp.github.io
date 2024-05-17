import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://passionate-fruit-347d6d7acb.strapiapp.com/api/blogs').then(response => {
      setPosts(response.data['data']);
    }).catch(error => console.error("Error fetching blog posts: ", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="dark:text-blue-200 text-2xl font-bold mb-4 transition duration-300">Blog</h2>
      <ul>
        {posts.map(({ id, attributes }) => (
          <li key={id} className="mb-2">
            <Link className="text-blue-500 hover:underline" to={`/blog/${id}`}>{attributes.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;

