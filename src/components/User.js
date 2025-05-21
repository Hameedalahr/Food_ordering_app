import React from 'react'

const User = (props) => {
  return (
    <div className="user-function">
      <h1>{props.name}</h1>
      <h2>{props.location}</h2>
    </div>
  )
}

export default User;
