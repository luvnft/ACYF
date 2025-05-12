import React, { useEffect, useState } from "react";
import { Orbis } from "@orbisclub/orbis-sdk";

const orbis = new Orbis();

interface OrbisCommentsProps {
  context: string;
}

export const OrbisComments: React.FC<OrbisCommentsProps> = ({ context }) => {
  const [comments, setComments] = useState<any[]>([]);
  const [connected, setConnected] = useState(false);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchComments();
  }, [context]);

  const fetchComments = async () => {
    const res = await orbis.getPosts({ context });
    if (res.status === 200) setComments(res.data);
  };

  const connectWallet = async () => {
    try {
      const provider = (window as any).ethereum;
      if (!provider) {
        alert("");
        return;
      }

      const res = await orbis.connect_v2({ provider });
      if (res.status === 200) {
        setConnected(true);
      } else {
        alert("Wallet connection failed.");
      }
    } catch (error) {
      console.error("Connection error:", error);
    }
  };

  const postComment = async () => {
    if (!comment.trim()) return;

    setLoading(true);
    const res = await orbis.createPost({
      body: comment.trim(),
      context,
    });

    if (res.status === 200) {
      setComment("");
      fetchComments();
    } else {
      alert("Failed to post comment.");
    }
    setLoading(false);
  };

  return (
    <div className="orbis-comments" style={{ marginTop: "16px", padding: "8px 0" }}>
      {!connected ? (
        <button onClick={connectWallet}>🔌 Connect Wallet to Comment</button>
      ) : (
        <>
          <textarea
            placeholder="💬 Leave a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
            style={{
              width: "100%",
              marginBottom: "8px",
              padding: "8px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              resize: "vertical",
            }}
          />
          <button onClick={postComment} disabled={loading}>
            {loading ? "Posting..." : "🚀 Post"}
          </button>
        </>
      )}

      <div className="comments-list" style={{ marginTop: "12px" }}>
        {comments.map((cmt, i) => (
          <div
            key={i}
            className="comment"
            style={{
              borderBottom: "1px solid #eee",
              padding: "8px 0",
              fontSize: "0.95em",
            }}
          >
            <strong>{cmt.creator_details?.profile?.username || "Anon"}</strong>:{" "}
            {cmt.content?.body || ""}
          </div>
        ))}
      </div>
    </div>
  );
};
