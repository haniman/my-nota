import React, { useState } from 'react';
import {Jumbotron,Container,Row,Button} from 'react-bootstrap'; 
import UserTable from './UserTable';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';

const Main = () => {
  
  //dummy data
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]

  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)

  //initial edit form state is EMPTY
  const initialFormState = { id: null, name: '', username: '' }
  const [currentUser,setCurrentUser] = useState(initialFormState)

  //editing  function
  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }


  const updateUser = (id, updatedUser) => {
  setEditing(false)
  setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  //function to add new user
 const addUser = user => {
    user.id = users.length + 1
    setUsers([ ...users, user ])
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
      <Container>
      <Row>
        <div className="col-md-6">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
         <div className="col-md-6">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />  {/*send users,delete,edit as props*/}
   
        </div>
      </Row>
    </Container>
  );
}

export default Main;