import React from 'react'
import { useState } from 'react'
import BookCreate from './Components/BookCreate'
import BookList from './Components/BookList'

export default function App() {
    const [books, setBook] = useState([])

    const createBooks = (title) => {
        const updateBooks = [
            ...books,
            {
                id: Math.round(Math.random() * 9999),
                title: title
            }


        ]
        setBook(updateBooks)
    }

    const deleteBookById = (id) => {
        const updateBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBook(updateBooks)
    }


    const editBookById = (id, newTitle) => {
        const updateBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newTitle }
            }
            return book
        })
        setBook(updateBooks)
    }

    return (

        <div className='app'>
            <h1 id='abc'>Reading List</h1>
            <BookCreate getTitleProp={createBooks} />
            <BookList booksProp={books} deleteBookIdProp={deleteBookById} editBookProp={editBookById} />
        </div>
    )
}
