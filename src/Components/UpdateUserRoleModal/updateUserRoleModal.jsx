import axios from "axios";
import React, { useState, useEffect } from "react";
import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
import * as BsIcons from "react-icons/bs";
import { toast } from "react-toastify";

const UpdateUserRoleModal = ({userData}) => {
  const currentUserRoleId = userData.rolesId
  const [newRoleId, setNewRoleId] = useState(currentUserRoleId)
    const {email, userId} = userData.user;
    const userRole = "User"
    const adminRole = "Admin"
    const boardOwnerRole = "Board Owner"
    const currentUserRoleName = userData.roles.roleName
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    let intRoleId = Number(event.target.value);
    setNewRoleId(intRoleId)
  }

  const handleSubmit = async () => {
    if(currentUserRoleId !== newRoleId){
      await axios.post(`http://localhost:27029/api/User/EditRole/${newRoleId}`, userData).then((res) => {
        if(res.status === 200){
        toast.success("Successfully Updated User Role")
        }
      })
    }
  }
  return (
    <>
      <BsIcons.BsPencilSquare
        size="1.5rem"
        color="#45A29E"
        cursor="pointer"
        onClick={handleShow}
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >Change User Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingSelect" label={`Edit ${email} role`}>
            <Form.Select aria-label="Floating label select example" onChange={handleChange}>
              <option value={userData.rolesId}>{userData.roles.roleName}</option>
              {currentUserRoleName !== userRole &&
              <option value="2">{userRole}</option>
                }
                {currentUserRoleName !== adminRole &&
              <option value="1">{adminRole}</option>
                }
                {currentUserRoleName !== boardOwnerRole &&
              <option value="3">{boardOwnerRole}</option>
                }
            </Form.Select>
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {handleClose(); handleSubmit()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateUserRoleModal;
