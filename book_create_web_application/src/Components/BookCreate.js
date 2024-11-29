import React from 'react'
import { useState } from 'react'

export default function BookCreate({ getTitleProp }) {

    const [title, setTitle] = useState('')

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        getTitleProp(title)
        setTitle('');
    }

    return (
        <div className='book-create'>
            <form onSubmit={handleSubmit}>
                <h3>Add a Book</h3>
                <label>Title</label>
                <input placeholder='Type here...' className='input' onChange={handleChange} value={title} />
                <button className='button'>Create</button>
            </form>
        </div>
    )
}
