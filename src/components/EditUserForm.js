import React, { useState, useEffect } from 'react';
import {Button,Table,Form} from 'react-bootstrap'

const EditUserForm = (props) => {

  const [user, setUser] = useState(props.currentUser)

  //let the EditForm knows props has changed
  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <Form.Label>Name</Form.Label>
      <Form.Control
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <Form.Label>Username</Form.Label>
      <Form.Control
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <Button variant="primary" type="submit">Update user</Button>
      <Button variant="primary"
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </Button>
    </Form>
  )
}

export default EditUserForm