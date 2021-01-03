import React from "react";

const Nav = (props) => {
	return (
		<div>
			<h1>
				{props.blogTitle ? props.blogTitle : "Go to settings to crete title"}
			</h1>
			<nav>
				<ul>
					<li>
						<a href='/'>Settings</a>
					</li>
					<li>
						<a href='/'>Add Post</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
