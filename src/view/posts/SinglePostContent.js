import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SinglePostContent = () => {
    return (
        <Fragment>
            <div className="container">
                <h2 className="single-post text-center">SINGLE POST TITLE</h2>
                <p className="text-center"><Link to="/author">Author Name</Link></p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, minus perferendis consequuntur nam voluptatem incidunt
                    saepe autem commodi cumque nobis ratione, sapiente dicta dolor nisi alias pariatur! Dolores, laudantium asperiores. Delectus,
                    facere illum voluptate deserunt nobis neque quas magni consequatur nesciunt autem labore incidunt eos odio accusantium assumenda
                    perspiciatis, harum eaque eius quasi minus molestiae. Iure voluptate expedita suscipit eum. Nesciunt ad recusandae qui deleniti
                    consequuntur ab perferendis enim exercitationem explicabo cumque excepturi reiciendis facere, corporis hic facilis, voluptatum
                    nulla. Iusto minima pariatur impedit magni suscipit facilis amet soluta nostrum?
                </p>
            </div>

        </Fragment>
    )

}

export { SinglePostContent }