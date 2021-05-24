import { Fragment } from "react"
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import {getFeaturedPosts} from '../lib/posts-utils';

const HomePage = (props) => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  )
}

export async function getStaticProps(context) {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
  }
}

export default HomePage
