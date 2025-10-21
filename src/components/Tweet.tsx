import type { TweetsData } from "../data"
import TweetLiked from "./TweetLiked"
import TweetShared from "./TweetShared"
import { useState } from "react"

type Reply = {
  handle: string,
  profilePic: string,
  tweetText: string,
}

function Tweet({tweet, onAddReply}: {tweet: TweetsData, onAddReply:(tweetId:string, reply:Reply) => void}) {

    const [isToggled, setIsToggled] = useState(false)
    const [reply, setReply] = useState('')
    //const [replyTo, setReplyTo] = useState('')

    //console.log(props, "alltweets")

    function handleToggle() {
        setIsToggled(prev => !prev)
    }

    function handleSubmit() {
        const newReply = {
            handle: `@Scrimba 💎`,
            profilePic: `images/scrimbalogo.png`,
            tweetText: reply,
        }

        onAddReply(tweet.uuid, newReply)
        setReply('')
    }

    const hideStyle = !isToggled ? 'hidden' : undefined

    return (
        <div className="tweet">
            <div className="tweet-inner">
                <img src={tweet.profilePic} className="profile-pic" />
                <div>
                    <p className="handle">{tweet.handle}</p>
                    <p className="tweet-text">{tweet.tweetText}</p>
                    <div className="tweet-details">
                        <span className="tweet-detail">
                            <i 
                                className="fa-regular fa-comment-dots"
                                onClick={handleToggle}
                            ></i>
                            {tweet.replies.length}
                        </span>
                        <TweetLiked likes={tweet.likes} />
                        <TweetShared retweets={tweet.retweets} />
                    </div>   
                </div>            
            </div>
            <div className={hideStyle} id="replies">
                {tweet.replies.map((reply, index:number) =>
                    <div key={index} className="tweet-reply">
                        <div className="tweet-inner">
                            <img src={reply.profilePic} className="profile-pic" />
                                <div>
                                    <p className="handle">{reply.handle}</p>
                                    <p className="tweet-text">{reply.tweetText}</p>
                                </div>
                            </div>
                    </div>
                )}
                <div className="tweet-reply">
                    <div className="input-with-button">
                        <input 
                        type="text" 
                        name="reply" 
                        value={reply}
                        onChange={e => setReply(e.target.value)}
                        placeholder="Tweet your reply"
                        />
                        <button onClick={handleSubmit}><i className="fa-regular fa-message"></i></button>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Tweet