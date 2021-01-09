import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Button,Table,Form} from 'react-bootstrap'

const AddUserForm = (props) => {

	//never put at top level 
	const initialFormState = { id: null, name: '', username: '' } //empty user as init
	const [user, setUser] = useState(initialFormState)

	//function to handle form submit
	const handleInputChange = (event) => {
	  const { name, value } = event.target //get name and value from inputs

	  setUser({ ...user, [name]: value })
	}

	//function to handle form submission
	const submitForm = (event) => {
		event.preventDefault()
	    if (!user.name || !user.username) return //if username is empty form cant be submitted

	    props.addUser(user) //call function from App (through prop) to add user 
	    setUser(initialFormState) //after submission return to init (empty user)
	}

  return (
    <Form onSubmit={submitForm}>
      <label>Full Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange}  />
      <Button>Add new user</Button>
    </Form>
  )
}

//dont forget to export everytime!!
export default AddUserForm