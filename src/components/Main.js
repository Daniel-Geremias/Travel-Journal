import React from "react";
import data from "../data";
import Post from "./Post";

export default function Main() {

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
        <div className="main">
            {post}
        </div>
    )
}