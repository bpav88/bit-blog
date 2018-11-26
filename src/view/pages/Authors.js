import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Authors.css";

const Authors = () => {
    return (
        <Fragment>
            <h2 className="authors-h2 container">AUTHORS (6)</h2>
            <ul className="list-group container ">
                <li className="list-group-item authors"><Link to="/author/:id">Name Surname (2 - posts)</Link></li>
                <li className="list-group-item authors"><Link to="/author/:id">Name Surname (2 - posts)</Link></li>
                <li className="list-group-item authors"><Link to="/author/:id">Name Surname (2 - posts)</Link></li>
                <li className="list-group-item authors"><Link to="/author/:id">Name Surname (2 - posts)</Link></li>
                <li className="list-group-item authors"><Link to="/author/:id">Name Surname (2 - posts)</Link></li>
                <li className="list-group-item authors"><Link to="/author/:id">Name Surname (2 - posts)</Link></li>
            </ul>
        </Fragment>

    );
}
export { Authors }