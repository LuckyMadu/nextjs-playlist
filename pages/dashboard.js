import { useState, useEffect } from "react";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Posts: {data.posts}</h3>
      <h3>Likes: {data.likes}</h3>
      <h3>Followers: {data.followers}</h3>
      <h3>Following: {data.following}</h3>
    </div>
  );
}

export default Dashboard;
