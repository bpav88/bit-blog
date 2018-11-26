import { Post } from "./../entities/Post";
import { POST_API } from "./../constants/constants";

const fetchPosts = () => {

    return fetch(POST_API)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            const posts = response.map((post) => {
                return new Post(post.userId, post.title, post.body);
            })
            return posts;
        })
}

export {
    fetchPosts
}