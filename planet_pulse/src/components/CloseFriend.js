// import "../assets/styles/closefriend.css";

// export default function CloseFriend({user}) {
//   return (
//     <li className="sidebarFriend">
//       <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
//       <span className="sidebarFriendName">{user.username}</span>
//     </li>
//   );
// }
import React, { useState, useEffect } from "react";
import "../assets/styles/closefriend.css"
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from the API
    axios.get("http://localhost:8000/api/users/").then((response) => {
      console.log(response.data)
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Community</h2>
      <ul>
        {users.map((user) => (
          <><li className="sidebarFriend" key={user.id}>
            <img className="sidebarFriendImg" src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="" />
            <span className="sidebarFriendName">{user.username}</span>
          </li></>
        ))}
      </ul>
    </div>
  );
}

export default UserList;