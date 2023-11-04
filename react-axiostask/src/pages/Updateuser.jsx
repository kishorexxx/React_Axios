// import React from 'react';
// import axios from "axios";
// import { useEffect, useRef } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

// function Updateuser() {

//   const name=useRef("");
//   const userName=useRef("");
//   const email=useRef("");
//   const phone=useRef("");
//   const street=useRef("");
//   const suite=useRef("");
//   const city=useRef("");
//   const zipcode=useRef("");

// const {id}=useParams();
// const navigate=useNavigate();

// useEffect((id) => {
//   console.log(id)
//   axios.get(`https://64f18c130e1e60602d23e95d.mockapi.io/user/${id}`).then((response) => {
// console.log(data);
//     name.current.value=response.data.name;
//     userName.current.value=response.data.username;
//     email.current.value=response.data.email;
//     phone.current.value= response.data.phone;
//     street.current.value=response.data.street;
//     suite.current.value=response.data.suite;
//     city.current.value=response.data.city;
//     zipcode.current.value=response.data.zipcode;
   
//    }).catch((error) => {
//     if( error.response ){
//         console.log(error.response.data); // => the response payload 
//  } })
// }, []);

// const updateUserHandler = () => {
//   var payload={
//     name:name.current.value,
//     username:userName.current.value,
//     email:email.current.value,
//     phone:phone.current.value?Number(phone.current.value):0,
//    address:{
//     street:street.current.value,
//     suite:suite.current.value,
//     city:city.current.value,
//     zipcode:zipcode.current.value,

//    }
//   };
//   axios.put(`https://64f18c130e1e60602d23e95d.mockapi.io/user/${id}`, payload).then((response) => {
//     navigate("/");
// });
// };

//   return (
//     <div>
//       <legend>Edit User</legend>
//       <Form.Group className="mb-3" controlId="formName">
//         <Form.Label>Name</Form.Label>
//         <Form.Control type="text" ref={name}placeholder='Enter Name'/>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formuserName">
//         <Form.Label>UserName</Form.Label>
//         <Form.Control type="text"  ref={userName} placeholder='Enter User Name'/>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formemail">
//         <Form.Label>email</Form.Label>
//         <Form.Control type="text"  ref={email} placeholder='Enter email'/>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formstreet">
//         <Form.Label>Address.Street</Form.Label>
//         <Form.Control type="text" ref={street}placeholder='Enter Address street'/>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formsuite">
//         <Form.Label>Address.suite</Form.Label>
//         <Form.Control type="text" ref={suite} placeholder='Enter Address suite'/>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formcity">
//         <Form.Label>city</Form.Label>
//         <Form.Control type="text"  ref={city} placeholder='Enter City name'/>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formzipcode">
//         <Form.Label>zipcode</Form.Label>
//         <Form.Control type="text"  ref={zipcode}placeholder='Enter zipcode'/>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formphone">
//         <Form.Label>phone</Form.Label>
//         <Form.Control type="text"  ref={phone} placeholder='Enter phone number'/>
//       </Form.Group>

//       <Button variant="primary" type="button" onClick={updateUserHandler}>Update</Button>
//     </div>
//   )
// }

// export default Updateuser



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Updateuser() {
  const { id } = useParams();
  const navigate = useNavigate();


  const [userData, setUserData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
    },
  });


  useEffect(() => {
    axios
      .get(`https://64f18c130e1e60602d23e95d.mockapi.io/user/${id}`)
      .then((response) => {
        const userData = response.data;
        setUserData(userData);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [id]);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };


  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      address: {
        ...prevUserData.address,
        [name]: value,
      },
    }));
  };


  const updateUserHandler = () => {
    axios
      .put(`https://64f18c130e1e60602d23e95d.mockapi.io/user/${id}`, userData)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
  };


  return (
    <div>
      <legend>Edit User</legend>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
          placeholder="Enter Name"
        />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formuserName">
        <Form.Label>UserName</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          placeholder="Enter User Name"
        />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formemail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          placeholder="Enter Email"
        />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formstreet">
        <Form.Label>Address Street</Form.Label>
        <Form.Control
          type="text"
          name="street"
          value={userData.address.street}
          onChange={handleAddressChange}
          placeholder="Enter Address Street"
        />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formsuite">
        <Form.Label>Address Suite</Form.Label>
        <Form.Control
          type="text"
          name="suite"
          value={userData.address.suite}
          onChange={handleAddressChange}
          placeholder="Enter Address Suite"
        />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formcity">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          name="city"
          value={userData.address.city}
          onChange={handleAddressChange}
          placeholder="Enter City Name"
        />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formzipcode">
        <Form.Label>Zipcode</Form.Label>
        <Form.Control
          type="text"
          name="zipcode"
          value={userData.address.zipcode}
          onChange={handleAddressChange}
          placeholder="Enter Zipcode"
        />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formphone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          value={userData.phone}
          onChange={handleInputChange}
          placeholder="Enter Phone Number"
        />
      </Form.Group>


      <Button variant="primary" type="button" onClick={updateUserHandler}>
        Update
      </Button>
    </div>
  );
}


export default Updateuser;