import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Form, Button, Container, Alert, Badge } from "react-bootstrap";
import { postText } from "../../redux/actions/actions";

export const Home = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text);
  const [input, setInput] = useState({text: ""});

  const handleOnChange = (e) => {
    setInput({
        [e.target.name]: e.target.value
    });     
  }

  const handleSubmit = (e) =>{
    console.log(input)
    e.preventDefault();
    dispatch(postText(input))
    setInput({
        text: ''
    })
  }

  return (
    <div>
        <Container>

        
      <h1 className="text-center display-2"><b>Text Reverse</b></h1>
      <Form onSubmit={handleSubmit}>
      <Form.Label  className='display-5 mt-5'>Input</Form.Label>
      <Form.Control className='mt-3' placeholder="Your Text Here" type="text"  name='text' value={input.text} autoComplete='off' onChange={handleOnChange}/>

      <Form.Text>{text.reverseText}</Form.Text>
      <Button className='mt-3' type='submit' variant="success">Submit</Button>{' '}
      <br/>
      {text.palindrome != null ? <Badge className='mt-3' variant="info" >Palindrome</Badge> : null} 
      </Form>
      </Container>
    </div>
  );
};
