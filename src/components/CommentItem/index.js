import {Component} from 'react'
import './index.css'

class CommentItem extends Component {
  state = {
    isLiked: false,
    timeAgo: 'few',
  }

  updateLikeUrl = () => {
    this.setState(prev => ({isLiked: !prev.isLiked}))
  }

  render() {
    const {isLiked, timeAgo} = this.state
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
              <p className="time">{`${timeAgo} minutes ago`}</p>
            </div>
            <p className="comment-content">{comment}</p>
          </div>
        </div>
        <div className="features-container">
          <button
            type="button"
            className="features-btn"
            onClick={this.updateLikeUrl}
          >
            <img src={likeImgUrl} alt="like" className="feature-img" />
          </button>
          <p className="like-txt">Like</p>
          <button
            data-testid="delete"
            type="button"
            className="features-btn delete-mrg"
            onClick={deleteComment}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="feature-img"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default CommentItem
