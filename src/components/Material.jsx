// src/App.js
import React, {useState} from 'react';
import { ThemeProvider, AppBar, Toolbar, Typography, Button, Container, InputAdornment, TextField } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import theme from './theme';
import {connect} from 'react-redux'
function Material({todos}) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit= (e)=>{
e.preventDefault()
setInputValue(inputValue)
console.log(inputValue)
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
      <AppBar position="sticky" >
        <Toolbar style={{border: '1px solid red'}}>
          <Typography variant="h6" style={{ flexGrow: 2 }}>
            My Material-UI App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: '20px', height: '900px' }}>
        <Typography variant="h2" gutterBottom>
          Welcome to My Material-UI App
        </Typography>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
        
<Container style={{ marginTop: '20px' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Your Input"
          variant="outlined"
          value={inputValue}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <Button type="submit" variant="contained" color="secondary">
          Submit
        </Button>
      </form>
      <Typography variant="h2" gutterBottom>
          {todos}
        </Typography>
    </Container>
 

      </Container>
      </ThemeProvider>
      
    </div>
  );
}
const maptotoState=(state)=>(
  {
    todos: state.todos
  } 
)

export default connect(maptotoState)(Material)
