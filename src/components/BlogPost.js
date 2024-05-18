import MarkdownRenderer from './MarkdownRenderer';

const BlogPost = ({ blog }) => {
    if (!blog) return <div className="container mx-auto p-4">Select an article to read</div>;
    return (
        <div className="container mx-auto p-4 max-w-5xl">
            <MarkdownRenderer content={blog.attributes.content} />
        </div>
    );
};

export default BlogPost;

