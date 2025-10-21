
import { useState } from 'react'
import { tweetsData } from './data'
import type { TweetsData } from './data'
import './App.css'

function App() {

  const [tweet, setTweet] = useState('')

  function userTweet(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setTweet(e.currentTarget.value)
  }

  function submitTweet() {
    console.log(tweet)
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
            onChange={userTweet}
          ></textarea>
        </div>
        <button id="tweet-btn" onClick={submitTweet}>Tweet</button>
        <div className="feed" id="feed">
        {tweetsData && tweetsData.map((tweet: TweetsData) =>
          <div className="tweet">
              <div className="tweet-inner">
                  <img src={tweet.profilePic} className="profile-pic" />
                  <div>
                      <p className="handle">{tweet.handle}</p>
                      <p className="tweet-text">{tweet.tweetText}</p>
                      <div className="tweet-details">
                          <span className="tweet-detail">
                              <i className="fa-regular fa-comment-dots" data-reply={tweet.uuid}></i>
                              {tweet.replies.length}
                          </span>
                          <span className="tweet-detail">
                              <i className="fa-solid fa-heart" data-heart={tweet.uuid}></i>
                              {tweet.likes}
                          </span>
                          <span className="tweet-detail">
                              <i className="fa-solid fa-retweet" data-retweet={tweet.uuid}></i>
                              {tweet.retweets}
                          </span>
                      </div>   
                  </div>            
              </div>
          </div>
        )}
        </div>
      </main>
    </>
  )
}

export default App
