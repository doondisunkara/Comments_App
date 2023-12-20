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

  onSubmitComment = event => {
    event.preventDefault()
    const {nameInput, commentInput, commentsList} = this.state
    if (nameInput !== '' && commentInput !== '') {
      const n = commentsList.length
      const id = n === 0 ? 0 : commentsList[n - 1].id + 1
      const newComment = {
        id,
        user: nameInput,
        comment: commentInput,
        date: new Date(),
      }
      this.setState(
        {
          commentsList: [...commentsList, newComment],
          nameInput: '',
          commentInput: '',
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
          <form className="creation-container">
            <h1 className="main-heading">Comments</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comment-img"
            />
            <br />
            <p>Say something about 4.0 Technologies</p>
            <input
              type="text"
              className="name-input"
              placeholder="Your Name"
              value={nameInput}
              onChange={this.updateNameInput}
            />
            <textarea
              type="text"
              rows="8"
              className="comment-input"
              placeholder="Your Comment"
              value={commentInput}
              onChange={this.updateCommentInput}
            >
              .
            </textarea>
            <button
              className="add-comment-btn"
              type="submit"
              onClick={this.onSubmitComment}
            >
              Add Comment
            </button>
          </form>
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
