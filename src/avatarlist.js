import React from 'react';
function Avatarlist(props){
    return(
    <div className="avatar-style ma4 bg-light-purple dib tc grow">
      <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="avatar" ></img>
      <h1> {props.name} </h1>
      <p> {props.position} </p>
    </div>
    )
}
export default Avatarlist