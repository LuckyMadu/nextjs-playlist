import { useEffect, useState } from "react";
import { getSession, signIn } from "next-auth/react";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getSessionStatus();
  }, []);

  async function getSessionStatus() {
    const session = await getSession();
    console.log("session", session);

    if (!session) {
      signIn();
    } else {
      setLoading(false);
    }
  }

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      <div>Dashboard</div>
    </>
  );
};

export default Dashboard;
