import React from 'react'
import BookEdit from './BookEdit'
import { useState } from 'react'

export default function BookShow({ bookShowProp, deleteBookIdProp, editBookProp }) {

    const [showEdit, setShowEdit] = useState(false)

    const handleDeleteBook = () => {
        deleteBookIdProp(bookShowProp.id)
    }

    const handleEditBook = () => {
        setShowEdit(!showEdit)
    }


    const handleSubmit = (id, newTitle) => {
        setShowEdit(false)
        editBookProp(id, newTitle)
    }

    let content = <div>{bookShowProp.title}</div>
    if (showEdit) {
        content = <BookEdit bookEditProp={handleSubmit} bookShowProp={bookShowProp} />
    }
    return (
        <div className='book-show' id='navBar'>
            <button className='edit' onClick={handleEditBook}>Edit</button>
            <button onClick={handleDeleteBook} className='delete'>Delete</button>
            <img src={`https://picsum.photos/seed/${bookShowProp.id}/300/200`} alt='Random Picture' />
            <div>{content}</div>
        </div>
    )
}
