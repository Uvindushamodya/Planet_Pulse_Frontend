import Post from "../components/Post";
import Share from "../components/Share";
import "../assets/styles/post.css";
import { format } from "timeago.js";
import React, { useState, useEffect } from "react";
import axiosInstance from "../axios"; // Import your Axios instance with authentication

import {
  ThumbUp,
  Favorite,
  Spa
} from "@material-ui/icons";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [users, setUsers] = useState([]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get("/api/users/");
        setUsers(response.data);
      } catch (error) {
        console.error(error.message);
      }
    }

    const fetchPosts = async () => {
      try {
        const response = await axiosInstance.get("/posts/"); // Adjust the URL as needed
        setPosts(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchUsers();
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <div className="post-list">
          {posts.map((post) => (
            post.points_assigned !== null && (
              <div className="post" key={post.id}>
                <div className="postWrapper">
                  <div className="postTop">
                    <div className="postTopLeft">
                      <span className="postUsername">
                        {users.find((user) => user.id === post.userId)?.username}
                      </span>
                    </div>
                    <div className="postTopRight">
                      {/* Add any additional content for postTopRight */}
                    </div>
                  </div>
                  <div className="postCenter">
                    <span className="postText">
                      {post.desc}
                      <span className="postDate">{format(post.created_at)}</span>
                    </span>
                    {post.image && (
                      <img
                        className="postImg"
                        src={post.image}
                        alt={`Post by ${post.user.username}`}
                      />
                    )}
                    <div className="postBottom">
                      <div className="postBottomLeft">
                        <Spa htmlColor="green" className="likeIcon" alt="" />
                        <span className="postCommentText">
                          {post.points_assigned} Points
                        </span>
                        <ThumbUp
                          htmlColor="blue"
                          className="likeIcon"
                          onClick={likeHandler}
                          alt=""
                        />
                        <Favorite
                          htmlColor="red"
                          className="likeIcon"
                          onClick={likeHandler}
                          alt=""
                        />
                        <span className="postLikeCounter">
                          {like} people like it
                        </span>
                      </div>
                      <div className="postBottomRight">
                        <span className="postCommentText">
                          {post.comment} comments
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
