import React from 'react'
import { useState } from 'react'
import BookCreate from './Components/BookCreate'

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
    return <div><BookCreate getTitleProp={createBooks} /></div>
}
