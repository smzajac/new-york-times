import React, { useState, useEffect } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import Fuse from "fuse.js";
import './App.css';

import Articles from './Components/Articles'
import Search from './Components/Search'

import getContent from './content';

function App() {
  const [news, setNews] = useState({})
  const [matches, setMatches] =useState([])
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({})

  useEffect(() =>{
    (async() =>{
      try{
        setLoading(true)
        const news = await getContent()
        setNews(news)
        setLoading(false)
      }catch(error){
        setLoading(false)
        console.error(error)
      }
    })();
  }, [])

  useEffect(() => {
    const fuse = new Fuse(news.results, {
      keys: ["title", "byline", "section"],
    });

    const matches = fuse.search(filter)
    setMatches(matches)
  }, [filter, news])


  let filtered = news.results
    //if a filtered option exists use it, if not use original data from async call
  if(!matches.length){
    filtered = news.results
  }else{
    //needed because fuse modifies the search array in a way we do not want
    let cleaned = matches.map(x => {
      return x.item
    })
    filtered = cleaned
  }


  return (
    <div className="App">
     { !loading ?
      <>
        <header>
          <Search onChange={(e) => (setFilter(e.target.value))}/>
        </header>
        <Articles news={filtered}/>
      </>
      :
      <CircularProgress size={200} thickness={2} style={{marginTop: "20%"}}/>
    }
    </div>
  );
}

export default App;
