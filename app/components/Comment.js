import React from 'react';
import {unixTimeToString}  from '../util'
import {Link} from 'react-router';
import {likePost, disLikePost} from '../server';

export default class Comment extends React.Component
{
  constructor(props) {
      super(props);
      // The FeedItem's initial state is what the Feed passed to us.
      this.state = props;
  }

  handleLikeClick(clickEvent) {
      clickEvent.preventDefault();
      if (clickEvent.button === 0) {
          // Callback function for both the like and unlike cases.
          var callbackFunction = (updatedLikeCounter) => {
              this.setState({postLikes: updatedLikeCounter});
          };


          if (this.didUserLike()) {
              disLikePost(this.state.itemId, this.state.postNum, 4, callbackFunction);
          } else {
              likePost(this.state.itemId, this.state.postNum, 4, callbackFunction);
          }
      }
  }
  didUserLike() {
      var likeCounter = this.state.postLikes;

      var liked = false;
      // Look for a likeCounter entry with userId 4 -- which is the
      // current user.
      for (var i = 0; i < likeCounter.length; i++) {
          if (likeCounter[i]._id === 4) {
              liked = true;
              break;
          }
      }
      return liked;
  }

  render()
  {
    return (
    <div>
    <div className="media-left media-top">
    PIC
    </div>
    <div className="media-body">
      <Link to={"/profile/" + this.props.author._id}>
  {this.props.author.fullName}
  </Link> {this.props.children}
    <br /><a href="#" onClick={(e) => this.handleLikeClick(e)}> {this.state.postLikes.length} Likes </a> · <a href="#">Reply</a> ·
    {unixTimeToString(this.props.postDate)}
    </div>
    </div>
    )
  }
}
