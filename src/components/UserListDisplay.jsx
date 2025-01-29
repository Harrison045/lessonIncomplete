import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

function UserListDisplay() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleOpen = (user) => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
    setOpen(!open);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const state = useSelector((state) => {
    return state.UserReducer;
  });
  console.log(state);

  return (
    <div>
      <h1>Output</h1>
      {state.user.map((user) => {
        return (
          <div>
            <h1>{user.name}</h1>
            <Button variant="secondary" onClick={()=>handleOpen(user)}>
              Edit
            </Button>
            <Button variant="danger">Delete</Button>
          </div>
        );
      })}

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
