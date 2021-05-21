import { useState, useEffect } from 'react'
import Parser from 'rss-parser'

// style
import './App.css';

const parser = new Parser()
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"



function App() {
  const [rssLinks,setRssLinks] = useState([])
  const [feeds, setFeeds] = useState([])

  

  //get rsslinks from local storage on load
  useEffect(() => {

    const localRssLinks = localStorage.getItem('rss-links')
    if(localRssLinks) setRssLinks((prevLinks) => JSON.parse(localRssLinks))

  },[])

  //update feeds on rssChange
  console.log(rssLinks)
  useEffect(() => {
      // console.log({rssLinks})
      if(rssLinks.length){
      (async () => {
        const feed = await parser.parseURL(CORS_PROXY + rssLinks[0])
        setFeeds(currentfeeds => currentfeeds.concat(feed))
        
      })()
    }
    
  }, [rssLinks])


  const handleRSSLinkAdd = (e) => {
    e.preventDefault();
    setRssLinks(rssLinks.concat(e.target.userInput.value))
  }

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
          feeds.length? feeds[0]: ''
        }

      </div>

    </div>
  );
}

export default App;
