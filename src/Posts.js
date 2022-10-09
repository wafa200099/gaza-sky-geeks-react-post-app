import { useState } from "react";
import "./style.css";

export const Posts = (props) => {
  const [like, setLike] = useState(0);

  const handlePluseclick = () => {
    setLike(like + 1);
  };
  return (
    <div className="post">
      <h1>{props.title}</h1>
      <img
        src="https://images.pexels.com/photos/11511204/pexels-photo-11511204.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        className="img"
      ></img>
      <p>{props.body}</p>
      <button onClick={handlePluseclick}>like</button> {like}
      {like > 20 && <span style={{ marginLeft: 30 }}>trendinggggg</span>}
    </div>
  );
};
