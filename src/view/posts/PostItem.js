import React from "react";
import { Link } from "react-router-dom";

const PostItem = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <Link to="/singlePost/:id"><h5 className="card-title">{props.postTitle}</h5></Link>
                <p className="card-text">{props.postBody}</p>
            </div>
        </div>
    );
}
export { PostItem }