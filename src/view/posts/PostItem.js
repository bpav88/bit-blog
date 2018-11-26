import React from "react";
import { Link } from "react-router-dom";

const PostItem = () => {
    return (
        <div class="card">
            <div class="card-body">
                <Link to="/singlePost/:id"><h5 class="card-title">Special title treatment</h5></Link>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
        </div>
    );
}
export { PostItem }