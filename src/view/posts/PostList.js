import React, { Component, Fragment } from "react";
import { PostItem } from "./PostItem";
import "./PostList.css"
import { fetchPosts } from '../../service/postService';

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetchPosts()
            .then((listOfPosts) => {
                this.setState({
                    posts: listOfPosts
                });

            })
    }

    render() {
        const postItems = this.state.posts.map((post, index) => {
            return <PostItem key={index} postTitle={post.title} postBody={post.body} />
        });

        return (
            <Fragment>
                <div className="container">
                    <h2 className="text-center postList">POSTS</h2>
                    {postItems}
                </div>
            </Fragment >
        );
    }

}

export { PostList }