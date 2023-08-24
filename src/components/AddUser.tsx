import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Container } from '@mui/material';
//reducer
import { User, addUser } from '../reducer/reducer';
import { HOME_PAGE } from '../common/PageRoutes';
//pageRoutes


const AddUser: React.FC = () => {
  const [inputData, setInputData] = useState<User>({
    id: 0,
    name: '',
    username: ''
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddUser = (inputData: User) => {
    dispatch(addUser(inputData));
    navigate(HOME_PAGE);
  };


  return (
    <Container>
      <TextField
        label="ID"
        type="number"
        value={inputData.id}
        onChange={e =>
          setInputData({ ...inputData, id: parseInt(e.target.value) })
        }
      />
      <TextField
        label="Title"
        type="text"
        value={inputData.name}
        onChange={e => setInputData({ ...inputData, name: e.target.value })}
      />
      <TextField
        label="Body"
        type="text"
        value={inputData.username}
        onChange={e =>
          setInputData({ ...inputData, username: e.target.value })
        }
      />
      <Button onClick={() => { handleAddUser(inputData); }} variant="outlined" color="primary">Add User</Button>
      <Button
        onClick={() => navigate(HOME_PAGE)}
        className="me-2"
        variant="outlined"
        color="secondary"
      >
        Back
      </Button>
    </Container>

  );
};

export default AddUser;