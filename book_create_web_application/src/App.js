import React from 'react'
import { useState } from 'react'
import BookCreate from './Components/BookCreate'
import BookList from './Components/BookList'
import axios from "axios"

export default function App() {
    const [books, setBook] = useState([])

    const createBooks = async (title) => {

        const response = await axios.post('http://localhost:3001/books', {
            title: title
        })

        console.log(response.data)

        // const updateBooks = [
        //     ...books,
        //     {
        //         id: Math.round(Math.random() * 9999),
        //         title: title
        //     }


        // ]
        // setBook(updateBooks)
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
            <BookList booksProp={books} deleteBookIdProp={deleteBookById} editBookProp={editBookById} />
            <BookCreate getTitleProp={createBooks} />
        </div>
    )
}
