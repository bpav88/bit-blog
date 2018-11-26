import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./SinglePost.css";
import { SinglePostContent } from "./SinglePostContent";
import { PostsOfAuthor } from "./PostsOfAuthor";

class SinglePost extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <SinglePostContent />
                <PostsOfAuthor />
            </Fragment>
        );
    }

}

export { SinglePost }