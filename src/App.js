import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './App.css';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import { createTheme, ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#30a490',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

function App() {
  const [data, setData] = useState([]);

  const getData = async (e) => {
    try {
      const response = await fetch('http://localhost:3000/pacientes');
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="nav">
          <Typography
            variant="h3"
            sx={{ fontWeight: 'bold', color: 'white ', mt: 3, mb: 6 }}
          >
            Registro de Pacientes
          </Typography>
        </div>
        <div>
          <div>
            <AddUser setData={setData} data={data} />
          </div>
          <div>
            <UserList setData={setData} data={data} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
