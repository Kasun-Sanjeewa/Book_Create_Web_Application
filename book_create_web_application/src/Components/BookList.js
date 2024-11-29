import React from 'react'
import BookShow from './BookShow'

export default function BookList({ booksProp, deleteBookIdProp }) {
    const renderBooks = booksProp.map((book) => {
        return <BookShow bookShowProp={book} key={book.id} deleteBookIdProp={deleteBookIdProp} />

    })

    return (
        <div className='book-list'>{renderBooks}</div>
    )
}
