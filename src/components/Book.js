import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Book = (props) => {
  const { id, title, author, image } = props.book;

  console.log('Book image:', image);

  return (
    <Card className="d-flex flex-row" style={{ alignItems: 'center' }}>
      <Card.Body style={{ flex: 1 }}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>저자: {author}</Card.Text>
        <Link to={'/bookDetail/' + id}>상세보기</Link>
      </Card.Body>
      <Card.Img 
        variant="right" 
        src={image} 
        alt={"description"} 
        style={{ width: '200px', height: 'auto', objectFit: 'cover' }} 
      />
    </Card>
  );
}

export default Book;
