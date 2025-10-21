
import { useState } from "react"

function TweetShared(props:{retweets:number}) {
    // click to share tweet, click again to not share
    const [isToggled, setIsToggled] = useState(false)

    function handleToggle() {
        setIsToggled(prev => !prev)
    }
    return (
        <span className="tweet-detail">
            <i 
                className="fa-solid fa-retweet"
                style={isToggled ? { color: "green" } : undefined}
                onClick={handleToggle}
            ></i>
            {isToggled ? props.retweets + 1 : props.retweets}
        </span>
    )
}

export default TweetShared