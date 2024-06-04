import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Member = (props) => {

    const {id, email, name} = props.member;
    console.log(id);
    console.log(email);
    console.log(name);


    return(
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{id}</Card.Text>
                <Card.Text>{email}</Card.Text>
                <Link to={'/memberdetail/' + id}>상세보기</Link>
            </Card.Body>
        </Card>
    );
};

export default Member;