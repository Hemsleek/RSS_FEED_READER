import { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [rssLinks,setRssLinks] = useState([])
  const [feeds, setFeeds] = useState([])

  const handleRSSLinkAdd = (e) => {
    e.preventDefault();
    setRssLinks(rssLinks.concat(e.target.userInput.value))
  }

  useEffect(() => {
      console.log({rssLinks})
    
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
