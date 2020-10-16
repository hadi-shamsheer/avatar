import React from 'react';
import ReactDOM from 'react-dom';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './avatarlist';
function Avatar(){
return(
    <div>
    <Avatarlist id="1" name="albert" position="1"/>
    <Avatarlist id="1" name="donald" position="2"/>
    <Avatarlist id="1" name="trump" position="3"/>
    <Avatarlist id="1" name="elizabeth" position="4"/>
    </div>)
}
export default Avatar;
