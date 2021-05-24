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

      if(rssLinks.length){
      (async () => {
        //TODO: map feeds
        const feed = await parser.parseURL(CORS_PROXY + rssLinks[0])
        setFeeds(currentfeeds => currentfeeds.concat(feed))
        
      })()
    }
    
  }, [rssLinks])


  const handleRSSLinkAdd = (e) => {
    e.preventDefault();
    const link = e.target.userInput.value

    if(!(rssLinks.includes(link))){
      setRssLinks(currentLinks => {
        const newRssLinks = currentLinks.concat(link)
        localStorage.setItem('rss-links',JSON.stringify(newRssLinks))
        return newRssLinks
      })
    }

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
        {JSON.stringify(rssLinks)}
        {
          feeds.title
        }

      </div>

    </div>
  );
}

export default App;
