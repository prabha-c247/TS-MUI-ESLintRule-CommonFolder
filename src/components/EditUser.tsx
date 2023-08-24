import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField, Container } from '@mui/material';
//style

//components
import { User, editUser } from '../reducer/reducer';
//reducer
import { RootState } from '../reducer/rootReducer';
//pageRoutes
import { HOME_PAGE } from '../common/PageRoutes';

const EditUser = () => {
  const { id } = useParams<{ id: string }>();
  const data = useSelector((state: RootState) => state.users.allUsers) as User[];
  const validId = id || '';
  console.log(data, 'data in edit component');
  const [inputData, setInputData] = useState<Partial<User>>({
    id: 0,
    name: '',
    username: ''
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toEdit: User | undefined = data.find((item) => item.id === parseInt(validId));

  useEffect(() => {
    if (toEdit) {
      setInputData(toEdit);
    }
  }, [toEdit]);


  const handleEditUser = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (inputData.id!) {
      dispatch(editUser({ id: inputData.id, inputData: inputData }));
      navigate(HOME_PAGE);
    }
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

      <Button onClick={() => { handleEditUser();}} className='me-2' variant="outlined">Edit User</Button>
      <Button onClick={() => { navigate(HOME_PAGE);}} className='me-2' variant="outlined" color="secondary">Back</Button>
    </Container>
  );
};

export default EditUser;