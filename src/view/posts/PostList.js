import React, { Fragment } from "react";
import { PostItem } from "./PostItem";
import "./PostList.css"

const PostList = () => {
    return (
        <Fragment>
            <div className="container">
                <h2 className="text-center postList">POSTS</h2>
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />


            </div>
        </Fragment >
    );
}
export { PostList }