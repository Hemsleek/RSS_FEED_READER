import { useState } from 'react'
import './App.css';

function App() {
  const [feeds, setFeeds] = useState([])

  const handleRSSAdd = (e) => {
    e.preventDefault();
    console.log(e.target.userInput.value)
  }

  return (
    <div className="App">
      <form onSubmit ={ handleRSSAdd } className="user-form">
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
