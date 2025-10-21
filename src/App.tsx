
import { useState } from 'react'
import { tweetsData } from './data'
import type { TweetsData } from './data'
import { v4 as uuidv4 } from 'uuid';
import Tweet from './components/Tweet'
import './App.css'

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
        <div className="feed" id="feed">
          {allTweets && allTweets.map((tweet: TweetsData, index: number) =>
            <Tweet key={index} {...tweet} />
          )}
        </div>
      </main>
    </>
  )
}

export default App
