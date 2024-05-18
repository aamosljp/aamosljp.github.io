import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Markdown from 'react-markdown';

const BlogPost = () => {
    const { name } = useParams();
    const [readme, setState] = useState(null);

    useEffect(() => {
        axios.get(`https://raw.githubusercontent.com/aamosljp/${name}/master/README.md`).then((response => {
            setState(response.data);
        }));
    }, [name]);

    if (!readme) return <div className="container mx-auto p-4">Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <Markdown className="container" children={readme}></Markdown>
        </div>
    );
};

export default BlogPost;

