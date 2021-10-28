import Axios from "axios";
import React from "react";
import Title from "./Title";
import Body from "./Body";

const GetPosts = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(Array.isArray(response.data) ? response.data : []);
    });
  }, []);

  console.log(posts);

  return (
    <>
      {posts.slice(0, 5).map((object) => {
        return (
          <>
            <Title props={object} />
            <Body props={object} />
          </>
        );
      })}
    </>
  );
};

export default GetPosts;
