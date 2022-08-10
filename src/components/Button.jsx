import React from 'react'
import { useEffect } from 'react'

export default function Button({serial, name, clickedthisButton, tag, play, link}) {
  const clickedButton = () => {
    clickedthisButton()
    tag(`${serial}`)
    play(`${link}`)
  }
    return (
    <button className="learn-facebook" onClick={clickedButton}>
            {serial !== "get_form" && <span className='button-B'>{serial}</span>}
            <span className='btn-2'>
            {name}
            </span>
        </button>
  )
}
