import React from 'react';
import './UserCard.css'; // Assuming you'll create a CSS file for styling

const UserCard = () => {
  // Static data for the user
  const profilePhoto = 'https://via.placeholder.com/150'; // Placeholder image URL
  const userName = 'Lokeswara Reddy';
  const userEmail = 'muthumulla.venkata.s86@kalvium.community';
  const userPhone = '+91 1234567890';
  const userAddress = 'The Apollo University, Chittoor, Andhra Pradesh, India';

  return (
    <div className="user-card">
      <img src={profilePhoto} alt="Profile" className="user-card__photo" />
      <div className="user-card__details">
        <h2 className="user-card__name">{userName}</h2>
        <p className="user-card__email">Email: {userEmail}</p>
        <p className="user-card__phone">Phone: {userPhone}</p>
        <p className="user-card__address">Address: {userAddress}</p>
      </div>
    </div>
  );
};

export default UserCard;
