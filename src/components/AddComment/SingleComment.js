import React from 'react';
import {Comment} from 'semantic-ui-react'

export const SingleComment=(name, comment, avtr)=>{
	console.log(comment === '');
	return(
		<Comment className="own-message">
			<Comment.Avatar src={avtr}/>
			<Comment.Content>
				<Comment.Author as='a'>{name}</Comment.Author>
				<Comment.Metadata>
					<div>Today at 5:42PM</div>
				</Comment.Metadata>
				<Comment.Text>{comment}</Comment.Text>
			</Comment.Content>
		</Comment>
	)
};