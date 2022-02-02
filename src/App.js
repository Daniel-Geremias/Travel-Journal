import React from "react"
import './App.css';
import data from "./data"
import Header from "./components/Header"
import Post from "./components/Post"

function App() {

  const post = data.map(item => {
    return(
      <Post 
        key={item.id}
        {...item}
      />
      )
    }
  )

  return (
    <div className="App">
      <Header />
      {post}
    </div>
  );
}

export default App;
