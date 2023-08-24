import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Container, Toolbar, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import './header.style.scss';
//pageRouter
import { ADD_USER } from '../common/PageRoutes';
const Header = () => {

  const navigate = useNavigate();

  return (
    <AppBar position="static" color="default" sx={{ marginBottom: '1rem' }}>
      <Container>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ alignSelf: 'center' }}>
            CRUD in Redux-ToolKit with Redux-Thunk!
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'green',
              color: 'white',
              marginLeft: 'auto',
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={() => {
              navigate(ADD_USER);
            }}
          >
            Add User <AddIcon sx={{ marginLeft: '0.5rem' }} />
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};



export default Header;