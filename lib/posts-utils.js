import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
    return fs.readdirSync(postDirectory);
}

export function getPostData(filename) {
    const postSlug = filename.replace(/\.md$/, '');
    const filePath = path.join(postDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const {data, content} = matter(fileContent)


    const postData = {
        slug: postSlug,
        ...data,
        content
    }

    return postData;
}

export function getAllPosts() {
    const postFiles = getPostsFiles();

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    })

    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

    return sortedPosts;
}

export function getFeaturedPosts() { 
    const allPosts = getAllPosts();

    const featuredPosts = allPosts.filter(post => {
        return post.isFeatured;
    });

    return featuredPosts;
}