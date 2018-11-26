import React, { Fragment } from "react";
import { AuthorName } from "./AuthorName";
import { AuthorAddress } from "./AuthorAddress";
import { AuthorCompany } from "./AuthorCompany";
import "./Author.css"
import { Link } from "react-router-dom"

const Author = () => {
    return (
        <Fragment>
            <div className="container">
                <h2 className="text-center m-3">Single Author</h2>
                <p><Link to="/authors">All authors</Link></p>
            </div>
            <div className="m-1">
                <AuthorName />
                <AuthorAddress />
                <AuthorCompany />

            </div>
        </Fragment>
    );
}
export { Author }