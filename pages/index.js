import { Fragment } from "react"
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import {getFeaturedPosts} from '../lib/posts-utils';
import Head from 'next/head';

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Hoàng Dũng Blog</title>
      </Head>
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
