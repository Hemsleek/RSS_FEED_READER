import { useState } from 'react'
import './App.css';

function App() {
  const [feeds, setFeeds] = useState([])
  
  return (
    <div className="App">
      <form className="user-form">
        <div className="form-group">
          <label>URL</label>
          <input type="text" placeholder="Enter Url" />
        </div>
        <button>Add</button>
      </form>

    </div>
  );
}

export default App;
