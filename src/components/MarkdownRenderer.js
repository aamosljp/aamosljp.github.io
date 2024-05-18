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
                    className="rounded-lg overflow-hidden border-l-4 border-gray-600"
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
        },
        ol: ({ node, className, children, ...props }) => {
            var list = [];
            for (var i = 1; i < children.length; i += 2) {
                list.push(<li key={(i+1)/2}>&emsp;<strong>{(i + 1) / 2}.</strong> {children[i]}</li>);
            }
            return (
                <ol className={className} {...props}>
                    {list}
                </ol>
            );

        },
        ul: ({ node, className, children, ...props }) => {
            var list = [];
            for (var i = 1; i < children.length; i += 2) {
                list.push(<li key={(i+1)/2}>&emsp;<strong>– </strong>{children[i]}</li>);
            };
            return (
                <ul className={className} {...props}>
                    {list}
                </ul>
            );
        },
        li: ({ node, inline, className, children, ...props }) => {
            return (
                <p className={`inline ${className}`} {...props}>{[children]}</p>
            );
        },
        a: ({ node, className, children, ...props }) => {
            return (
                <a className={`hover:underline text-blue-500 ${className}`} {...props}>{children}</a>
            );
        },
        blockquote: ({ node, className, children, ...props }) => {
            return (
                <blockquote className={className} {...props}>{children}</blockquote>
            );
        },
    };
    return (
        <ReactMarkdown components={renderers} rehypePlugins={RehypeRaw}>{content}</ReactMarkdown>
    );
};

export default MarkdownRenderer;
