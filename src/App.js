import React, { useState } from "react";
import Nav from "./components/nav/nav";
import blogPosts from "./components/BlogPosts/BlogPosts";

function App() {
	const [blogPosts, setBlogPosts] = useState([]);

	if (blogPosts.lengh === 0) {
		setBlogPosts({
			title: "vail",
			subHeader: "is a magical place",
			author: "Jake Meyers",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		});
	}

	console.log(blogPosts);

	return (
		<div className='App'>
			<Nav />
		</div>
	);
}

export default App;
