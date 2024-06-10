import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/book/detail/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data:', data);
                setBook(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Fetch error:', error);
                setError(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!book) {
        return <div>No book found</div>;
    }

    return (
        <div>
            <h1>책 상세페이지</h1>
            <div style={{ display: 'flex' }}>
                <div style={{ padding: 50 }}>
                    <img src={book.image} alt={book.title} style={{ width: '200px', height: 'auto' }} />
                </div>
                <div style={{ padding: 50 }}>
                    <p><strong>ID:</strong> {book.id}</p>
                    <p><strong>제목:</strong> {book.title}</p>
                    <p><strong>저자:</strong> {book.author}</p>
                    <p><strong>출판사:</strong> {book.publisher}</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;