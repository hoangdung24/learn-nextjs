import PostHeader from './post-header';
import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Image from 'next/image';

function PostContent (props) {
    const {title, slug, image, content} = props.post;

    const imagePath = `/images/posts/${slug}/${image}`;

    const components = {
        p(paragraph) {
            const { node } = paragraph;
            if (node.children[0].tagName === 'img') {
                const image = node.children[0];
                return (
                    <div className={classes.image}>
                        <Image 
                            src={`/images/posts/${slug}/${image.properties.src}`} 
                            alt={image.alt} 
                            width={600} 
                            height={300}
                        />
                    </div>
                );
            }
            return <p>{paragraph.children}</p>
        },
        code(code) {
            return (
                <SyntaxHighlighter
                    
                    language="javascript"
                    style={atomDark}>
                    {code.children}
                </SyntaxHighlighter>
            )
        }
    }

    return (
        <article className={classes.content}>
            <PostHeader title={title} image={imagePath} /> 
            <ReactMarkdown components={components}>
                {content}
            </ReactMarkdown>
        </article>
    )
}

export default PostContent;