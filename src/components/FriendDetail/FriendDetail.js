import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './FriendDetail.css'


const FriendDetail = () => {
  const { friendId } = useParams();

  const [friend, setFriend] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);

  return (
    <div className="friend-detail">
      Back to Friends: <Link to='/friends' >Back</Link>
      <h1>Friend Details for{friendId}</h1>
      <h2>Name: {friend.name}</h2>
      <h4>Email: {friend.email}</h4>
      <h5>Website: {friend.website}</h5>
      <h6>
        Addres: {friend.address?.city}
      </h6>
      <h6>
        Lat:{friend.address?.geo.lat}
      </h6>
    </div>
  );
};

export default FriendDetail;
