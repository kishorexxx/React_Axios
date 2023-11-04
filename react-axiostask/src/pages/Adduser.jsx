import React from 'react'
import axios from 'axios';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from 'react';

function Adduser() {
  

  const name=useRef("");
  const userName=useRef("");
  const email=useRef("");
  const phone=useRef("");
  const street=useRef("");
  const suite=useRef("");
  const city=useRef("");
  const zipcode=useRef("");


  const navigate=useNavigate();

  const addUserHandler=()=>{
    
    var payload={

      name:name.current.value,
      username:userName.current.value,
      email:email.current.value,
      phone:phone.current.value?Number(phone.current.value):0,
     address:{
      street:street.current.value,
      suite:suite.current.value,
      city:city.current.value,
      zipcode:zipcode.current.value,

     }
    };
    
    axios.post("https://64f18c130e1e60602d23e95d.mockapi.io/user",payload).then(() => {
      navigate("/");
    });
     }; 

  return (
    <div>
      <legend>Add User</legend>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" ref={name}placeholder='Enter Name'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formuserName">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text"  ref={userName} placeholder='Enter User Name'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formemail">
        <Form.Label>email</Form.Label>
        <Form.Control type="text"  ref={email} placeholder='Enter email'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formstreet">
        <Form.Label>Address.Street</Form.Label>
        <Form.Control type="text" ref={street}placeholder='Enter Address street'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formsuite">
        <Form.Label>Address.suite</Form.Label>
        <Form.Control type="text" ref={suite} placeholder='Enter Address suite'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formcity">
        <Form.Label>city</Form.Label>
        <Form.Control type="text"  ref={city} placeholder='Enter City name'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formzipcode">
        <Form.Label>zipcode</Form.Label>
        <Form.Control type="text"  ref={zipcode}placeholder='Enter zipcode'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formphone">
        <Form.Label>phone</Form.Label>
        <Form.Control type="text"  ref={phone} placeholder='Enter phone number'/>
      </Form.Group>

      <Button variant="primary" type="button" onClick={addUserHandler}>AddUser</Button>
    </div>
  )
}

export default Adduser