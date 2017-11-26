import React from 'react'
import { Comment, Header } from 'semantic-ui-react'
export const CommentExampleComment = () => (
	<Comment.Group>
		<Header as='h3' dividing>Comments</Header>

		<Comment>
			<Comment.Avatar src='https://spotim-demo-chat-server.herokuapp.com/avatars/001-snorlax.png' />
			<Comment.Content>
				<Comment.Author as='a'>Matt</Comment.Author>
				<Comment.Metadata>
					<div>Today at 5:42PM</div>
				</Comment.Metadata>
				<Comment.Text>How artistic!</Comment.Text>
			</Comment.Content>
		</Comment>

		<Comment>
			<Comment.Avatar src='https://spotim-demo-chat-server.herokuapp.com/avatars/002-psyduck.png' />
			<Comment.Content>
				<Comment.Author as='a'>Elliot Fu</Comment.Author>
				<Comment.Metadata>
					<div>Yesterday at 12:30AM</div>
				</Comment.Metadata>
				<Comment.Text>
					<p>This has been very useful for my research. Thanks as well!</p>
				</Comment.Text>
			</Comment.Content>
			<Comment.Group>
				<Comment>
					<Comment.Avatar src='https://spotim-demo-chat-server.herokuapp.com/avatars/004-jigglypuff.png' />
					<Comment.Content>
						<Comment.Author as='a'>Jenny Hess</Comment.Author>
						<Comment.Metadata>
							<div>Just now</div>
						</Comment.Metadata>
						<Comment.Text>
							Elliot you are always so right :)
						</Comment.Text>
					</Comment.Content>
				</Comment>
			</Comment.Group>
		</Comment>

		<Comment>
			<Comment.Avatar src='https://spotim-demo-chat-server.herokuapp.com/avatars/003-pikachu.png' />
			<Comment.Content>
				<Comment.Author as='a'>Joe Henderson</Comment.Author>
				<Comment.Metadata>
					<div>5 days ago</div>
				</Comment.Metadata>
				<Comment.Text>
					Dude, this is awesome. Thanks so much
				</Comment.Text>
			</Comment.Content>
		</Comment>
	</Comment.Group>);