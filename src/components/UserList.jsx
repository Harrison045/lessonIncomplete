import React from "react";
import { useSelector } from "react-redux";
import UserListDisplay from "./UserListDisplay";

function UserList() {
  const state = useSelector((state) => {
    return state.UserReducer;
  });
  console.log(state);
  return (
    <div>
      {state.user.map((user) => {
        return <UserListDisplay user={user} />;
      })}
    </div>
  );
}

export default UserList;





{/* <div>

import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function UserListDisplay(props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const {user} = props

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <h1>Output</h1>
      <h1>{user.name}</h1>

      <Modal show={open} onHide={handleOpen}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={handleName}
                value={name}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                autoFocus
                onChange={handleEmail}
                value={email}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleOpen}>
            Close
          </Button>
          <Button variant="primary" onClick={handleOpen}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserListDisplay;

</div> */}
