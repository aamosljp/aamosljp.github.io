import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { gruvboxDark as theme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import RehypeRaw from 'rehype-raw';

const MarkdownRenderer = ({ content }) => {
    const renderers = {
        code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
                <SyntaxHighlighter
                    style={theme}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                >
                    {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
            ) : (
                <code className={className} {...props}>
                    {children}
                </code>
            );
        }
    };
    return (
        <ReactMarkdown components={renderers} rehypePlugins={RehypeRaw}>{content}</ReactMarkdown>
    );
};

export default MarkdownRenderer;
