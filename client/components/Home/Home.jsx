import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postText } from "../../redux/actions/actions";

import { Form, Button, Container, Alert, Badge } from "react-bootstrap";
import "./Home.css";


export const Home = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text);
  const [input, setInput] = useState({ text: "" });

  const handleOnChange = (e) => {
    setInput({
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postText(input));
    setInput({
      text: "",
    });
  };

  return (
    <div className="background">
      <h1 className="text-center display-2 ">
        <b>Text Reverse</b>
      </h1>
      <Container  style={{ width: "25rem"}}>
        <Form onSubmit={handleSubmit}>
          <Form.Label className="display-5 mt-5">Input</Form.Label>
          <Form.Control
            className="mt-3"
            placeholder="Your Text Here"
            type="text"
            name="text"
            value={input.text}
            autoComplete="off"
            onChange={handleOnChange}
          />
          {text.reverseText ? (
            <Alert className="mt-2"> Output = {text.reverseText}</Alert>
          ) : null}
          <br />
          {text.palindrome != null ? (
            <Badge variant="info">{text.palindrome}</Badge>
          ) : null}
          <br />
          <Button className="mt-3" type="submit" variant="success">
            Submit
          </Button>{" "}
          <br />
          {text.response ? (
            <Alert className="mt-3 text-center" variant="danger">
              {" "}
              {text.response.data.msg}{" "}
            </Alert>
          ) : null}
        </Form>
      </Container>
    </div>
  );
};
