import React from 'react'
import { useState, useEffect } from 'react'
import BookCreate from './Components/BookCreate'
import BookList from './Components/BookList'
import axios from "axios"

export default function App() {
    const [books, setBook] = useState([])


    const fetchData = async () => {
        const response = await axios.get('http://localhost:3001/books')
        setBook(response.data)
    }

    useEffect(() => {
        fetchData()
    }, [])


    const createBooks = async (title) => {

        const response = await axios.post('http://localhost:3001/books', {
            title: title
        })


        const updateBooks = [
            ...books,

            response.data


        ]
        setBook(updateBooks)
    }

    const deleteBookById = async (id) => {

        await axios.delete(`http://localhost:3001/books/${id}`)

        const updateBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBook(updateBooks)
    }


    const editBookById = async (id, newTitle) => {

        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        })


        const updateBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data }
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
