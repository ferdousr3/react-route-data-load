import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Friend.css";

const Friend = ({ friend }) => {
  const { id, username, name, email } = friend;
   
  const navigate = useNavigate()

  const showFriendDetails = ()=>{
    const path = `/friend/${id}`
    navigate(path)
  }


  return (
    <div className="friend">
      <h3>Name: {name}</h3>
      <h4>Email: {email} </h4>

      <Link className="friend-link" to={`/friend/${id}`} >
      Details
      </Link>
      <br />
      <button className="friend-btn" onClick={showFriendDetails} >
        {username} Id:{id}
      </button>
    </div>
  );
};

export default Friend;
