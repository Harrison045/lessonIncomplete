import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editUser, deleteUser } from "../slice/slice";

function UserListDisplay() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentUser, setCurrentUser] = useState(null); // To store the current user being edited

  const dispatch = useDispatch();

  // Toggle modal visibility and set current user
  const handleOpen = (user) => {
    setCurrentUser(user);
    setName(user.name);
    setEmail(user.email);
    setOpen(!open);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSave = () => {
    // Dispatch the editUser action to update the user data
    dispatch(editUser({ id: currentUser.id, newData: { name, email } }));
    setOpen(false); // Close the modal after saving changes
  };

  const handleDelete = (id) => {
    // Dispatch the deleteUser action to remove the user
    dispatch(deleteUser(id));
  };

  const state = useSelector((state) => state.UserReducer);

  return (
    <div>
      <h1>Users List</h1>
      {state.users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <Button variant="secondary" onClick={() => handleOpen(user)}>
            Edit
          </Button>
          <Button variant="danger" onClick={() => handleDelete(user.id)}>
            Delete
          </Button>
        </div>
      ))}

      <Modal show={open} onHide={() => setOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="nameInput">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={handleName}
                value={name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="emailInput">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" onChange={handleEmail} value={email} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserListDisplay;
