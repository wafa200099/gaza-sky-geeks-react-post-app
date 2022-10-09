//import { WelcomeMessage } from "./WelcomeMessage";
import "./style.css";
import { Posts } from "./Posts";
import { createElement, useEffect, useState } from "react";
import { Counter } from "./Counter";
import React from "react";

/*
const posts = [
  {
    title: "title1",
    imgSrc:
      "https://images.pexels.com/photos/11027273/pexels-photo-11027273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    body: " hiii body1",
  },
  {
    title: "title2",
    imgSrc:
      "https://images.pexels.com/photos/11511204/pexels-photo-11511204.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    body: "hiii body2 ",
  },
  {
    title: "title3",
    imgSrc:
      "https://images.pexels.com/photos/11511204/pexels-photo-11511204.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    body: " hiiii body3",
  },
];
*/
/*const title = posts[0].title;

const imgSrc = posts[0].imgSrc;

const body = posts[0].body;

posts.map(post =>
<Posts title={post.title} />
<Posts imgSrc={post.imgSrc} />
<Posts body={post.body} />
)*/

//لاحظي لما نحط اكسبرشن داخل الاهتمل لازم ينعمله رابينج  {}
/*{posts.map((post) => (
  <Posts title={post.title} imgSrc={post.imgSrc} body={post.body} />
))}*/

export const App = () => {
  const [posts, setposts] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  const [newTitle, setNewTitle] = useState(" ");
  const [newBody, setNewBody] = useState(" ");

  const onHandleTitle = (e) => {
    setNewTitle(e.target.value);
  };

  const onHandleBody = (e) => {
    setNewBody(e.target.value);
  };

  const onHandlePost = () => {
    setposts([
      {
        title: newTitle,
        body: newBody,
        id: Date.now(),
        userid: 1,
      },
      ...posts,
    ]);
    setNewTitle("");
    setNewBody(" ");
  };

  useEffect(() => {
    setIsLoding(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setposts(json);
      })
      .finally(() => {
        setIsLoding(false);
      });
  }, []);
  if (isLoding)
    return (
      <div>
        <img src="data:image/png;base64,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"></img>
      </div>
    );
  // promises important
  // beta version of react(function//hooks)
  //useeffect(function,list)
  //symantic html
  //accsbelity
  //search engine

  return (
    <div className="container">
      <h1>Create New Post</h1>
      <input
        type="text"
        placeholder="title"
        value={newTitle}
        onChange={onHandleTitle}
      />
      <br></br>
      <br></br>
      <br></br>

      <input
        type="text"
        placeholder="body"
        value={newBody}
        onChange={onHandleBody}
      />
      <br></br>
      <br></br>
      <br></br>

      <button id="add" onClick={onHandlePost}>
        Add Post!
      </button>
      <div className="post">
        {posts.map((post) => (
          <Posts title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
};
