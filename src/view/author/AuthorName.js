import React, { Fragment } from "react";
import "./AuthorName.css"

const AuthorName = () => {
    return (
        <Fragment>
            <div className="container clearFix author-div">
                <img src="http://via.placeholder.com/200" className="author-name-img" />

                <div className="author-name-text ">
                    <h2>Name Surname</h2>
                    <p>Username: my_cool_username</p>
                    <p>Email: my_cool@email.com</p>
                    <p>Phone: my_cool_username</p>
                </div>

            </div>
        </Fragment>
    );
}
export { AuthorName }