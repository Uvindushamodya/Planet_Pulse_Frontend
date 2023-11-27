<div className="post">
  <div className="postWrapper">
    <div className="postTop">
      <div className="postTopLeft">
        <span className="postUsername">
          {/* {Users.filter((u) => u.id === post?.userId)[0].username} */}
        </span>
        <span className="postDate">{post.created_at}</span>
      </div>
      <div className="postTopRight">
        <MoreVert />
      </div>
    </div>
    <div className="post-list">
      {posts.map((post) => (
        <div className="postCenter" key={post.id}>
          <span className="postText">{post.desc}</span>
          {post.image && (
            <img src={post.image} alt={`Post by ${post.user.username}`} />
          )}
          <div className="postBottom">
            <div className="postBottomLeft">
              <img
                className="likeIcon"
                src="/assets/images/post/like"
                onClick={likeHandler}
                alt=""
              />
              <img
                className="likeIcon"
                src="assets/heart.png"
                onClick={likeHandler}
                alt=""
              />
              <span className="postLikeCounter">{like} people like it</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">{post.comment} comments</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>;
