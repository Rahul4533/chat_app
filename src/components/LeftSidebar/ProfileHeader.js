import React from "react";

function ProfileHeader({ user }) {
  return (
    <>
      <div className="header">
        <p>{user.name}</p>
      </div>
    </>
  );
}

export default ProfileHeader;