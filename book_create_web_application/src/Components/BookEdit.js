import React from 'react'
import { useState } from 'react'

export default function BookEdit({ bookShowProp, bookEditProp }) {

    const [title, setTitle] = useState(bookShowProp.title)

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        bookEditProp(bookShowProp.id, title)
    }

    return (
        <div>
            <form className='book-edit' onSubmit={handleSubmit}>
                <label>Title</label>
                <input onChange={handleChange} value={title} className='input' />
                <button className='button is-primary'>Save</button>
            </form>
        </div>
    )
}
