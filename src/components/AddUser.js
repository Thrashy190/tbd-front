import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddUser = ({ setData, data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let date = new Date().toLocaleString();

  const [dataTemplate, setDataTemplate] = useState({
    id: "",
    nombre: "",
    apellidos: "",
    fecha_nacimiento: "",
    fecha_registro: date,
    direccion: "",
    codigo_postal: 0,
    telefono: 0,
    peso: 0,
    altura: 0,
    antecedentes: "",
  });

  const handleChange = (prop) => (event) => {
    setDataTemplate({ ...dataTemplate, [prop]: event.target.value });
    console.log(dataTemplate);
  };

  const handleSubmit = () => {
    setData([dataTemplate, ...data]);
    handleClose();
  };

  return (
    <div>
      <div>
        <Button
          variant="contained"
          onClick={handleOpen}
          sx={{ color: "white", fontSize: 15 }}
        >
          Agregar paciente
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>Agregar paciente</div>
          <form>
            <div sx={{ display: "flex", flexDirection: "row" }} className="">
              <TextField
                value={dataTemplate.nombre}
                onChange={handleChange("nombre")}
                className="input-item"
                sx={{ mb: 2, mt: 2, mr: 2 }}
                id="outlined-basic"
                label="Nombres"
                variant="outlined"
              ></TextField>
              <TextField
                value={dataTemplate.apellidos}
                onChange={handleChange("apellidos")}
                className="input-item"
                sx={{ mb: 2, mt: 2 }}
                id="outlined-basic"
                label="Apellidos"
                variant="outlined"
              ></TextField>
            </div>
            <div>
              <TextField
                value={dataTemplate.fecha_nacimiento}
                onChange={handleChange("fecha_nacimiento")}
                sx={{ mb: 2 }}
                fullWidth
                id="outlined-basic"
                label="Fecha de nacimiento"
                variant="outlined"
              ></TextField>
            </div>
            <div sx={{ display: "flex", flexDirection: "row" }}>
              <TextField
                value={dataTemplate.direccion}
                onChange={handleChange("direccion")}
                sx={{ mb: 2, mr: 2 }}
                id="outlined-basic"
                label="Direccion"
                variant="outlined"
              ></TextField>
              <TextField
                value={dataTemplate.codigo_postal}
                onChange={handleChange("codigo_postal")}
                sx={{ mb: 2 }}
                id="outlined-basic"
                label="Codigo postal"
                variant="outlined"
              ></TextField>
            </div>
            <div>
              <TextField
                value={dataTemplate.telefono}
                onChange={handleChange("telefono")}
                sx={{ mb: 2 }}
                fullWidth
                id="outlined-basic"
                label="Telefono"
                variant="outlined"
              ></TextField>
            </div>
            <div sx={{ display: "flex", flexDirection: "row" }}>
              <TextField
                value={dataTemplate.peso}
                onChange={handleChange("peso")}
                sx={{ mb: 2, mr: 2 }}
                id="outlined-basic"
                label="Peso"
                variant="outlined"
              ></TextField>
              <TextField
                value={dataTemplate.altura}
                onChange={handleChange("altura")}
                sx={{ mb: 2 }}
                id="outlined-basic"
                label="Altura"
                variant="outlined"
              ></TextField>
            </div>
            <div>
              <TextField
                value={dataTemplate.antecedentes}
                onChange={handleChange("antecedentes")}
                sx={{ mb: 2 }}
                fullWidth
                id="outlined-multiline-static"
                label="Descripcion de antecedentes"
                multiline
                rows={4}
              />
            </div>
            <Button onClick={handleSubmit} sx={{ color: "#30a490" }}>
              Registrar paciente
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default AddUser;
