import React from "react";
import User from "../components/user";

function UserList({ users }) {
  return (
    <>
      <h1>List of users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <User user={user} />
        </div>
      ))}
    </>
  );
}

export default UserList;

//runs on server side, never run on client side
//not include in JS bundle
//can put API keys
//can use any pages, not in components
//need to return object with keys
//will run at build time - in dev, runs on every req

/* when this func is pre-rendered at build time, addition to HTML file,
nextjs generates JSON file holding the result of running getStaticProps */
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
