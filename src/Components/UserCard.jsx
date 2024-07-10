// Your code goes here
// do a default export
import React, { useState } from "react";
import styles from "./UserCard.module.css";
const UserCard = ({ name, avatar, posts, followers, address }) => {
  const [data, setData] = useState("follow");
  const handleClick = () => {
    if (data === "follow") {
      setData("Unfollow");
    } else {
      setData("follow");
    }
  };
  return (
    <div className={styles.container}>
      <div>
        <img src={avatar} alt="img" className={styles.avatar} />
      </div>
      <h2 data-testid="user_name">{name}</h2>
      <p data-testid="user_address">{address}</p>
      <h3>Posts</h3>
      <p data-testid="user_posts">{posts}</p>
      <h3>Followers</h3>
      <p data-testid="user_followers">{followers}</p>
      <button onClick={() => handleClick()}>{data}</button>
    </div>
  );
};

export default UserCard;
