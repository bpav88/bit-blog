import React, { Component, Fragment } from 'react';
import './App.css';
import { Header } from "./partials/Header";
import { Footer } from "./partials/Footer";
import { PostList } from "./posts/PostList";
import { Route } from "react-router-dom";
import { About } from "./pages/About";
import { SinglePost } from './posts/SinglePost';
import { Authors } from './pages/Authors';
import { Author } from './author/Author';


class App extends Component {
	render() {
		return (
			<Fragment>

				<Header />
				<Route path="/about" component={About} />
				<Route path="/singlePost" component={SinglePost} />
				<Route path="/authors" component={Authors} />
				<Route path="/author" component={Author} />
				<Route exact path="/" component={PostList} />
				<Footer />

			</Fragment>
		);
	}
}

export default App;
