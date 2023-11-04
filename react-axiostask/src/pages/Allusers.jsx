import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import DeleteConfirmation from '../component/DeleteConfirmation';


function Allusers() {
  const[allUser,setAllUser]=useState([]);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [itemToDeleteId, setItemToDeleteId] = useState(0);

  useEffect(()=>{
    axios.get("https://64f18c130e1e60602d23e95d.mockapi.io/user").then((response)=>{
      setAllUser(response.data)
    })
  },
  []  );

  const openConfirmDeleteModalHandler = (id) => {
    setShowModal(true);
    setItemToDeleteId(id);
  };
  const hideDeleteModalHandler = () => {
    setShowModal(false);
    setItemToDeleteId(0);
  };

  const confirmDeleteHandler = () => {
    axios
      .delete(`https://64f18c130e1e60602d23e95d.mockapi.io/user/${itemToDeleteId}`)
      .then((response) => {
        setAllUser((previousState) => {
          return previousState.filter((_) => _.id !== itemToDeleteId);
        });
        setItemToDeleteId(0);
        setShowModal(false);
      });
  };

  return (
    <div>
       <div className="container"><br/>
      <DeleteConfirmation
        showModal={showModal}
        hideDeleteModalHandler={hideDeleteModalHandler}
        title="Delete Confirmation"
        body="Are you want delete this item?"
        confirmDeleteHandler={confirmDeleteHandler}
      ></DeleteConfirmation> 

      <Row className="mt-2">
        <Col md={{span:4,offset:4}}>
        <Button variant="primary" onClick={()=>navigate("/add-user")}>Add New User</Button>
        </Col>
      </Row><br/>
        <Row xs={1} md={3} className="g-2">
        {allUser.map((item)=>(
          <Col key={item.id}>
            <Card style={{width:"80%", height:"100%",backgroundColor:'lightgray'}}>
              <Card.Body>
                <Card.Title>Name - {item.name}</Card.Title>
                <Card.Text>Username - {item.username}</Card.Text>
                <Card.Text>EmailId - {item.email}</Card.Text>
                {/* {item.address && item.address.map(data=>( */}
                 
                  <Card.Text key={item.id}>Address - {item.address.street} {item.address.suite} {item.address.city} {item.address.zipcode}</Card.Text>
                {/* ))} */}
               
                <Card.Text>Phone - {item.phone}</Card.Text>
                
                <Button
	  variant="primary"
	  onClick={() => navigate(`/update-user/${item.id}`)}	>
	  Edit
	</Button>
  <Button  variant="danger"
                  onClick={() =>{openConfirmDeleteModalHandler(item.id)}}   >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </div>
    </div>
  )
}

export default Allusers
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
// import EditUserForm from '../component/EditUserForm';

// function Allusers() {
//   const [allUser, setAllUser] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [itemToDeleteId, setItemToDeleteId] = useState(0);
//   const [editUserId, setEditUserId] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get('https://64f18c130e1e60602d23e95d.mockapi.io/user').then((response) => {
//       setAllUser(response.data);
//     });
//   }, []);

//   const openConfirmDeleteModalHandler = (id) => {
//     setShowModal(true);
//     setItemToDeleteId(id);
//   };

//   const hideDeleteModalHandler = () => {
//     setShowModal(false);
//     setItemToDeleteId(0);
//   };

//   const confirmDeleteHandler = () => {
//     axios
//       .delete(`https://64f18c130e1e60602d23e95d.mockapi.io/user/${itemToDeleteId}`)
//       .then((response) => {
//         setAllUser((previousState) => {
//           return previousState.filter((user) => user.id !== itemToDeleteId);
//         });
//         setItemToDeleteId(0);
//         setShowModal(false);
//       });
//   };

//   const editUserHandler = (id) => {
//     setEditUserId(id);
//   };

//   const cancelEditHandler = () => {
//     setEditUserId(0);
//   };

//   return (
//     <div>
//       <div className="container">
//         <br />
//         {/* Add New User Button */}
//         <Row className="mt-2">
//           <Col md={{ span: 4, offset: 4 }}>
//             <Button variant="primary" onClick={() => navigate('/add-user')}>
//               Add New User
//             </Button>
//           </Col>
//         </Row>
//         <br />

//         {/* User Cards */}
//         <Row xs={1} md={3} className="g-2">
//           {allUser.map((user) => (
//             <Col key={user.id}>
//               {editUserId === user.id ? (
//                 // Edit User Form
//                 <EditUserForm user={user} onCancelEdit={cancelEditHandler} />
//               ) : (
//                 // User Card
//                 <Card style={{ width: '80%', height: '100%', backgroundColor: 'lightgray' }}>
//                   <Card.Body>
//                     <Card.Title>Name - {user.name}</Card.Title>
//                     <Card.Text>Username - {user.username}</Card.Text>
//                     <Card.Text>EmailId - {user.email}</Card.Text>
//                     <Card.Text>
//                       Address - {user.address.street} {user.address.suite} {user.address.city} {user.address.zipcode}
//                     </Card.Text>
//                     <Card.Text>Phone - {user.phone}</Card.Text>
//                     <Button variant="primary" onClick={() => editUserHandler(user.id)}>
//                       Edit
//                     </Button>
//                     <Button variant="danger" onClick={() => openConfirmDeleteModalHandler(user.id)}>
//                       Delete
//                     </Button>
//                   </Card.Body>
//                 </Card>
//               )}
//             </Col>
//           ))}
//         </Row>
//       </div>
//     </div>
//   );
// }

// export default Allusers;