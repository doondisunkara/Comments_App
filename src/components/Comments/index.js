import {Component} from 'react'
import './index.css'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsList: [],
    nameInput: '',
    commentInput: '',
  }

  updateNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  updateCommentInput = event => {
    this.setState({commentInput: event.target.value})
  }

  onSubmitComment = () => {
    const {nameInput, commentInput, commentsList} = this.state
    if (nameInput !== '' && commentInput !== '') {
      const id = commentsList.length === 0 ? 0 : commentsList[-1].id + 1
      this.setState(
        {
          commentsList: [
            ...commentsList,
            {id, user: nameInput, comment: commentInput},
          ],
        },
        console.log(commentsList),
      )
    }
  }

  onDeleteComment = id => {
    const {commentsList} = this.state
    const updatedCommentsList = commentsList.filter(each => each.id !== id)
    this.setState({commentsList: updatedCommentsList})
  }

  render() {
    const {nameInput, commentInput, commentsList} = this.state
    return (
      <div className="app-container">
        <div className="content-container">
          <div className="creation-container">
            <h1 className="main-heading">Comments</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comment-img"
            />
            <br />
            <label htmlFor="nameField">
              Say something about 4.0 Technologies
            </label>
            <input
              id="nameField"
              type="text"
              className="name-input"
              placeholder="Your Name"
              value={nameInput}
              onChange={this.updateNameInput}
            />
            <input
              type="text"
              className="comment-input"
              placeholder="Your Comment"
              value={commentInput}
              onChange={this.updateCommentInput}
            />
            <button
              className="add-comment-btn"
              type="button"
              onClick={this.onSubmitComment}
            >
              Add Comment
            </button>
          </div>
          <hr className="separation" />
          <p className="comments-count">
            <span className="count">{commentsList.length}</span> Comments
          </p>
          <ul className="comments-list">
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                onDeleteComment={this.onDeleteComment}
                commentDetails={eachComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
