import React from 'react'
import BookShow from './BookShow'

export default function BookList({ booksProp, deleteBookIdProp, editBookProp }) {
    const renderBooks = booksProp.map((book) => {
        return <BookShow bookShowProp={book} key={book.id} deleteBookIdProp={deleteBookIdProp} editBookProp={editBookProp} />

    })

    return (
        <div className='book-list'>{renderBooks}</div>
    )
}
