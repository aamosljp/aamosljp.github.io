import React from "react";

const BlogList = ({ blogs, onSelectBlog, selectedBlog }) => {
    return (
        <div className="container min-h-screen max-w-xs border-r-2 border-gray-300">
            <h2 className="p-4 mb-4 transition duration-300">Blog</h2>
            <ul>
                {blogs.map((blog) => (
                    selectedBlog?.id === blog.id ? (
                        <button key={blog.id} className="text-left mb-2 p-2 bg-gray-300" style={{width: '100%'}}>
                            {blog.attributes.title}
                        </button>
                    ) : (
                        <button key={blog.id} onClick={() => onSelectBlog(blog)} className="text-left mb-2 p-2">
                            {blog.attributes.title}
                        </button>
                    )
                ))}
            </ul>
        </div >
    );
};

export default BlogList;

