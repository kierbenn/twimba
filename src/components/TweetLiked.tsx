
import { useState } from "react"

function TweetLiked(props:{likes:number}) {
    const [isToggled, setIsToggled] = useState(false)

    function handleToggle() {
        setIsToggled(prev => !prev)
    }
    return (
        <span className="tweet-detail">
            <i 
                className="fa-solid fa-heart"
                style={isToggled ? { color: "red" } : undefined} 
                onClick={handleToggle}
            ></i>
            {isToggled ? props.likes + 1 : props.likes}
        </span>
    )
}

export default TweetLiked