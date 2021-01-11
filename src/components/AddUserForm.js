import React, { useState } from 'react';
import {Container,Row,Col,Button,Table,Form} from 'react-bootstrap'

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
  	  <Container fluid>
          <Row>
            <Col>
			    <Form onSubmit={submitForm}>
			      <Form.Label>Full Name</Form.Label>
			      <Form.Control placeholder="Enter full name" name="name" value={user.name} onChange={handleInputChange} />
			      <Form.Label>Username</Form.Label>
			      <Form.Control placeholder="Enter username" name="username" value={user.username} onChange={handleInputChange}  />
			     <Button variant="primary" type="submit">Add new user</Button>
			    </Form>
			 </Col>
          </Row>
        </Container>
  )
}

export default AddUserForm