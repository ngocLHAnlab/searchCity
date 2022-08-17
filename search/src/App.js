import './App.css';
import cities from 'cities.json';
import { useEffect, useState } from 'react';
function App() {
  const cities = require('cities.json');
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() =>{
    setItems(cities)
  }, [])
  const setSuggestHandler = (text) =>{
    setText(text)
    setSuggestions([])
  }
  const onChangeHandler = (text)=>{
    var matches = []
    if (text.length>0) {
      matches = cities.filter((city) => {
        return city.name.toLowerCase().startsWith(text.toLowerCase());
      });
    }
    console.log('matches', matches)
    setSuggestions(matches)
    setText(text)
  }
  return (
    <div className="App">
      <input type="text"
      onChange={e => onChangeHandler(e.target.value)} value={text}/>
      {suggestions && suggestions.map((suggestions, i) =>
        <div key={i} onClick={()=> setSuggestHandler(suggestions.name)}>{suggestions.name}</div>
      )}
    </div>
  );
}

export default App;
