import React from 'react';
import { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import styles from './login.module.css';

export default function LoginPage(props) {
    const [formData, setformData] = useState({ email: "", password: "" });

    function handleChange(name, value) {
        setformData((prevvalue) => ({
            ...prevvalue,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (formData.email !== "" && formData.password !== "") {
            props.onFormSubmit(formData);
        }
    }


    return (
        <div className={styles.container}>
            <Container
                fluid
                className={styles.wrapper}
            >
                <Row className={styles.row}>
                   
                    <Col md={6} className={styles.col}>
                        <Card className={styles.card}>
                            <Card.Body className={styles.cardContent}>
                                <div className="text-center mb-4">
                                    <h2 className="fw-bold text-uppercase">Welcome to Mixmatic Pro</h2>
                                    <h4 className="mt-1 mb-5">Sign in to your account</h4>
                                </div>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-4" controlId="formEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="formPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                                        />
                                    </Form.Group>
                                    <div className="text-center">
                                        <Button variant="dark" type="submit" className="w-100 mb-3">
                                            Sign in
                                        </Button>
                                        {props.message && <p style={{color:"red"}}>{props.message}</p>}
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
               
                    <Col md={6} className={styles.col}>
                        <div className={styles.imageContainer}>
                            <img
                                src="/image.jpeg"
                                alt="Side Image"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
