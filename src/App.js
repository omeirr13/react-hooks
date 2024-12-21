import React, { useEffect, useState } from "react";

export default function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [resource, setResource] = useState([]);
  // useEffect(() => {
  //   console.log("resource type changeds");
  // }, [resourceType]);
  // console.log("redner");

  // useEffect(() => {
  //   console.log("on mount");
  // }, []);

  // useEffect(() => {
  //   console.log("okay!");
  // }, [1, 2, 3]);

  //everytime we change our resource type we are running a sideeffect
  useEffect(() => {
    console.log("fetching", resourceType);
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setResource(JSON.stringify(json)));
  }, [resourceType]);
  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      <p>{resource}</p>
    </>
  )
}