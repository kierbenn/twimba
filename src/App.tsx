
import { useState } from 'react'
import { tweetsData } from './data'
import type { TweetsData, Reply } from './data'
import { v4 as uuidv4 } from 'uuid';
import Tweet from './components/Tweet'
import './App.css'

function App() {
  // initiate allTweets with tweetsData to populate component
  const [allTweets, setAllTweets] = useState(tweetsData)
  // hold user's tweet
  const [tweet, setTweet] = useState('')

  function submitTweet() {
    // return if empty
    if (!tweet) return
    // setup tweet obj structure
    const newTweet = {
        handle: `@Scrimba 💎`,
        profilePic: `images/scrimbalogo.png`,
        likes: 0,
        retweets: 0,
        tweetText: tweet,
        replies: [],
        isLiked: false,
        isRetweeted: false,
        uuid: uuidv4(), // generate new uuid
    }
    // add new tweet to front of tweets array
    setAllTweets(prev => [newTweet, ...prev])
    // clear text
    setTweet('')
    //console.log(newTweet)
  }

  // Need to pass handleAddReply to Tweet Component
  const handleAddReply = (tweetId:string, reply:Reply) => {
    // find matching uuid and add in reply obj
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
            onChange={e => setTweet(e.target.value)}
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
