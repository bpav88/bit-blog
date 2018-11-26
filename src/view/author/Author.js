import React, { Component, Fragment } from "react";
import { AuthorName } from "./AuthorName";
import { AuthorAddress } from "./AuthorAddress";
import { AuthorCompany } from "./AuthorCompany";
import "./Author.css"
import { Link } from "react-router-dom"

class Author extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
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
}

export { Author }