
import { useState } from 'react'
import { tweetsData } from './data'
import type { TweetsData } from './data'
import { v4 as uuidv4 } from 'uuid';
import Tweet from './components/Tweet'
import './App.css'

type Reply = {
  handle: string,
  profilePic: string,
  tweetText: string,
}

function App() {

  const [tweet, setTweet] = useState('')
  const [allTweets, setAllTweets] = useState(tweetsData)

  function userTweet(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setTweet(e.currentTarget.value)
  }

  function submitTweet() {
    
    if (!tweet) return

    const newTweet = {
        handle: `@Scrimba 💎`,
        profilePic: `images/scrimbalogo.png`,
        likes: 0,
        retweets: 0,
        tweetText: tweet,
        replies: [],
        isLiked: false,
        isRetweeted: false,
        uuid: uuidv4(),
    }

    setAllTweets(prev => [newTweet, ...prev])
    setTweet('')
    console.log(newTweet)
  }

  const handleAddReply = (tweetId:string, reply:Reply) => {
    setAllTweets(prev =>
      prev.map(tweet =>
        tweet.uuid === tweetId
          ? { ...tweet, replies: [...tweet.replies, reply] }
          : tweet
      )
    )
  }

  return (
    <>
      <header>
        <h1>Twimba</h1>
      </header>
      <main>
        <div className="tweet-input-area">
          <img src="scrimbalogo.png" className="profile-pic" />
          <textarea
            placeholder="What's happening?"
            id="tweet-input"
            value={tweet}
            onChange={userTweet}
          ></textarea>
        </div>
        <button id="tweet-btn" onClick={submitTweet}>Tweet</button>
        {allTweets && (
          <div className="feed" id="feed">
            {allTweets.map((tweet: TweetsData) => (
              <Tweet key={tweet.uuid} tweet={tweet} onAddReply={handleAddReply} />
            ))}
          </div>
        )}
      </main>
    </>
  )
}

export default App
