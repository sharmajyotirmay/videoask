import React, { useState } from 'react'
import { useEffect } from 'react';
import Button from './Button';
import {videos} from './videos'
import Form from './Form'
function Rightcontainer( {clickedButton, setClickedButton, play, setPlay}) {
    const [form, setForm] = useState(false);
    const [isClicked, setIsClicked] = useState(true);

    useEffect(() => {
      console.log(clickedButton, form)
    },[clickedButton, form])
  return (
    <div className='right-container'>
        <div className="button-container">
        <div className="right-Buttons">
        {isClicked && <Button name = "Campaign Structure" serial = "A" link = "https://bit.ly/3BTJvPM" clickedthisButton = {() => setIsClicked(false)} tag = {() => setClickedButton("A")} play = {(val) => setPlay(`${val}`)}/>}
        {isClicked && <Button name = "Learn Facebook Basics" serial = "B" link = "https://bit.ly/3QxAm3q" clickedthisButton = {() => setIsClicked(false)} tag = {() => setClickedButton("B")} play = {(val) => setPlay(`${val}`)}/>}
        {(isClicked !== true) && clickedButton === "A" && <Button name = "download campaign structure" serial = "get_form" link = "https://bit.ly/3BTJvPM" clickedthisButton = {() => setForm(true)} tag = {(val) => setClickedButton(`${val}`)} play = {(val) => setPlay(`${val}`)}/>}
        {(isClicked !== true) && clickedButton === "B" && <Button name = "Learn Facebook Basics" serial = "get_form" link = "https://bit.ly/3QxAm3q" clickedthisButton = { () => setForm(true) } tag = {(val) => setClickedButton(`${val}`)} play = {(val) => setPlay(`${val}`)}/>}
        {(isClicked !== true) && clickedButton === "get_form" && <Form/>}
        </div>
        </div>
    </div>
  )
}

export default Rightcontainer;