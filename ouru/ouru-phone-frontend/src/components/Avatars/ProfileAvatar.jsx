import React, { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProviders';
import useAuth from '../../hooks/useAuth';

function ProfileAvatar() {
    const {user} = useAuth()
  return (
    <div className="avatar w-full">
      <div className="w-24 rounded-full">
        <img
          src={
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
          }
        />
      </div>
    </div>
  );
}

export default ProfileAvatar
