import React from 'react'

export default function Form() {
  return (
    <div className='form-submit'>
        <p>Before you go please leave your contact details
            so we can get back to you...
        </p>
        <form action="submit">
            <input type="text" name='name' placeholder='name'/>
            <input type="text" name='email' placeholder='email'/>
            <input type="checkbox" />
            <input type='submit' value="submit"/>
        </form>
    </div>
  )
}
