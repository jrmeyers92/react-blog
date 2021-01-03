import React from "react";

const BlogPost = (props) => {
	return (
		<div>
			<h2>{props.title}</h2>
			<h3>{props.subTitle}</h3>
			<p>{props.content}</p>
			<address>{props.author}</address>
		</div>
	);
};

export default BlogPost;
