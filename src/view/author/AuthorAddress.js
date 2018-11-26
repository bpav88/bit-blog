import React, { Fragment } from "react";
import "./AuthorAddress.css"

const AuthorAddress = () => {
    return (
        <Fragment>
            <div className="container clearFix author-div">
                <div className="author-address-text ">
                    <h2>Name Surname</h2>
                    <p>Street: Bla Bla St</p>
                    <p>City: Belgrade</p>
                    <p>ZipCode: 11000</p>
                </div>

                <img src="http://via.placeholder.com/300x200" className="author-address-img" />

            </div>
        </Fragment>
    );
}
export { AuthorAddress }