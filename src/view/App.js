import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import { Header } from "./partials/Header";
import { Footer } from "./partials/Footer";
import { PostList } from "./posts/PostList";
import { About } from "./pages/About";
import { SinglePost } from './posts/SinglePost';
import { Authors } from './pages/Authors';
import { Author } from './author/Author';
import { CreatePost } from "./posts/CreatePost"
import { fetchPosts } from '../service/postService';



class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// posts: [],
			// users: []
		}
	}

	// componentDidMount() {
	// 	fetchPosts()
	// 		.then((listOfPosts) => {
	// 			this.setState({
	// 				posts: listOfPosts
	// 			})
	// 			console.log(this.state.posts);
	// 		});
	// }

	render() {
		return (
			<Fragment>

				<Header />
				<Switch>
					<Route path="/post/new" component={CreatePost} />
					<Route path="/about" component={About} />
					<Route path="/singlePost" component={SinglePost} />
					<Route path="/authors" component={Authors} />
					<Route path="/author" component={Author} />
					<Route path="/" component={PostList} />
				</Switch>
				<Footer />


			</Fragment>
		);
	}
}

export default App;
