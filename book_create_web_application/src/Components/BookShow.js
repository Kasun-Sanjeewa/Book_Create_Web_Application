import React from 'react'

export default function BookShow({ bookShowProp, deleteBookIdProp }) {
    const handleDeleteBook = () => {
        deleteBookIdProp(bookShowProp.id)
    }
    return (
        <div className='book-show'>
            <div>{bookShowProp.title}</div>
            <button onClick={handleDeleteBook} className='delete'>Delete</button>
        </div>
    )
}
