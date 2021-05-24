import PostContent from '../../components/posts/post-detail/post-content';
import {getPostsFiles, getPostData} from '../../lib/posts-utils';


const PostDetailPage = (props) => {

  return (
    <div>
      <PostContent post={props.post}/>
    </div>
  )
}
  
export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData
    },
    revalidate: 600
  }

}

export async function getStaticPaths() {
  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map(filename => {
    return filename.replace(/\.md$/, '');
  })

  return {
    paths: slugs.map((slug) => ({params: {slug} })),
    fallback: 'blocking'
  }
}

export default PostDetailPage
  