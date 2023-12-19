import {Component} from 'react'
import './index.css'

class CommentItem extends Component {
  state: {
    isLiked: false,
  }

  updateLikeUrl = () => {
    this.setState(prev => ({isLiked: !prev.isLiked}))
  }

  render() {
    const {isLiked} = this.state
    const {commentDetails, onDeleteComment} = this.props
    const {id, user, comment} = commentDetails
    const userFirst = user.slice(0, 1)
    const likeImgUrl = isLiked
      ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    const deleteComment = () => {
      onDeleteComment(id)
    }
    return (
      <li className="comment-item">
        <div className="comment-container">
          <div className="user-icon amber">
            <p className="letter-icon">{userFirst}</p>
          </div>
          <div className="comment-details">
            <div className="commented-time">
              <h1 className="commented-user">{user}</h1>
              <span className="time">2 minutes ago</span>
            </div>
            <p className="comment-content">{comment}</p>
          </div>
          <div className="features-container">
            <button
              type="button"
              className="features-btn"
              onClick={this.updateLikeUrl}
            >
              <img src={likeImgUrl} alt="like" />
            </button>
            <p>Like</p>
            <button
              type="button"
              className="features-btn"
              onClick={deleteComment()}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
                alt="delete"
              />
            </button>
          </div>
        </div>
      </li>
    )
  }
}

export default CommentItem
