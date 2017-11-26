import React, {Component} from 'react';
import {CommentExampleComment} from './MessagesList'
import {SingleComment} from './SingleComment'
import {Comment} from 'semantic-ui-react'

class AddComment extends Component {
	constructor() {
		super();
		this.state = {
			userComment: '',
			commentsList: []
		}
	}

	changeUserInput(comment) {
		this.setState({
			userComment: comment
		})
	}

	addToFeed(commentToAdd) {
		let commentArray = this.state.commentsList;
		commentArray.push(commentToAdd);
		this.setState({
			commentsList: commentArray,
			userComment: ''
		})
	}

	render() {
		const {userComment, commentsList} = this.state;

		return (
			<div className="chat-main-wrapper">
				<div className="message-wrapper">
					{CommentExampleComment()}
					{commentsList.map((comment, i) =>
						<Comment.Group key={i}>
							{comment !== '' ? (SingleComment("Daniella",comment, 'https://spotim-demo-chat-server.herokuapp.com/avatars/005-bullbasaur.png')):(null)}
						</Comment.Group>)}
				</div>
			<div className="textarea-wrapper">
				<div className="ui input">
					<input type="text" placeholder="write a massage"
					       onChange={(e) => this.changeUserInput(e.target.value)}
					       value={userComment}/>
				</div>
				<button className="ui button"
				        onClick={() => this.addToFeed(userComment)}>
					send
				</button>
			</div>
			</div>
		);
	}
}

export default AddComment;
