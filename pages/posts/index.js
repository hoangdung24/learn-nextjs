import AllPosts from '../../components/posts/all-posts';
import {getAllPosts} from '../../lib/posts-utils';

const AllPostsPage = (props) => {
  console.log(props.posts);
  return (
    <div>
      <AllPosts posts={props.posts} />
    </div>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  
  return {
    props: {
      posts: allPosts
    }
  }
}
  
export default AllPostsPage
  