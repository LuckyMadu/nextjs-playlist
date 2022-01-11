import { useState } from "react";

function CommentsPage() {
  const [comment, setComment] = useState("");
  const [data, setData] = useState(null);

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();

    setData(data);
  };

  const handleComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    console.log("data", data);
  };
  return (
    <>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={handleComment}>Submit Comment</button>
      <button onClick={fetchComments}>Load comments</button>
      {data?.map((item) => {
        return (
          <div key={item.id}>
            {item.id} {item.text}
          </div>
        );
      })}
    </>
  );
}

export default CommentsPage;
