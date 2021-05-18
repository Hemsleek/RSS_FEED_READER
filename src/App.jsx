import { useState, useEffect } from 'react'
import Parser from 'rss-parser'

// style
import './App.css';

const parser = new Parser()
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"



function App() {
  const [rssLinks,setRssLinks] = useState([])
  const [feeds, setFeeds] = useState([])

  const handleRSSLinkAdd = (e) => {
    e.preventDefault();
    setRssLinks(rssLinks.concat(e.target.userInput.value))
  }

  useEffect(() => {
      // console.log({rssLinks})

      (async () => {
        const feed = await parser.parseURL(CORS_PROXY + rssLinks)
        
      })()
    
  }, [rssLinks])

  return (
    <div className="App">
      <form onSubmit ={ handleRSSLinkAdd } className="user-form">
        <div className="form-group">
          <label>URL</label>
          <input name="userInput" type="text" placeholder="Enter Url" />
        </div>
        <button type="submit">Add</button>
      </form>

      <div className="rss-feeds">
        {
          feeds
        }

      </div>

    </div>
  );
}

export default App;
