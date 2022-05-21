import { Typography } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import { createTheme, ThemeProvider } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#30a490",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

function App() {
  const [data, setData] = useState([
    {
      id: 124,
      nombre: "Ale",
      apellidos: "Lopez",
      fecha_nacimiento: "02/07/2002",
      fecha_registro: "09/04/2022",
      direccion: "Montessori 125 el baluarte",
      codigo_postal: 25297,
      telefono: 8441039924,
      peso: 70,
      altura: 1.5,
      antecedentes:
        "ajsbvouwbvoubwnovujbwouebvouwebovuw woebnvouewbovubwoe vwojenbvouwe vowenbvouwe vowiehoubvwo",
    },
    {
      id: 1245,
      nombre: "Diego",
      apellidos: "Lopez",
      fecha_nacimiento: "02/07/2002",
      fecha_registro: "09/04/2022",
      direccion: "Montessori 125 el baluarte",
      codigo_postal: 25297,
      telefono: 8441039924,
      peso: 90,
      altura: 1.7,
      antecedentes: "ajsbvouwbvoubwnovujbwouebvouwebovuw woebnvouewbovubwoe",
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="nav">
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "white ", mt: 3, mb: 6 }}
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
