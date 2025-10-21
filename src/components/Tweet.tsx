import type { TweetsData } from "../data"
import TweetLiked from "./TweetLiked"
import TweetShared from "./TweetShared"
import { useState } from "react"

function Tweet(props: TweetsData) {

    const [isToggled, setIsToggled] = useState(false)

    function handleToggle() {
        setIsToggled(prev => !prev)
    }

    const hideStyle = !isToggled ? 'hidden' : undefined

    return (
        <div className="tweet">
            <div className="tweet-inner">
                <img src={props.profilePic} className="profile-pic" />
                <div>
                    <p className="handle">{props.handle}</p>
                    <p className="tweet-text">{props.tweetText}</p>
                    <div className="tweet-details">
                        <span className="tweet-detail">
                            <i 
                                className="fa-regular fa-comment-dots" 
                                onClick={handleToggle}
                            ></i>
                            {props.replies.length}
                        </span>
                        <TweetLiked likes={props.likes} />
                        <TweetShared retweets={props.retweets} />
                    </div>   
                </div>            
            </div>
            <div className={hideStyle} id="replies">
                {props.replies.map(reply =>
                    <div className="tweet-reply">
                        <div className="tweet-inner">
                            <img src={reply.profilePic} className="profile-pic" />
                                <div>
                                    <p className="handle">{reply.handle}</p>
                                    <p className="tweet-text">{reply.tweetText}</p>
                                </div>
                            </div>
                    </div>
                )}
            </div> 
        </div>
    )
}

export default Tweet