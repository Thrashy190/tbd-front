import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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

const EditUser = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div>
        <Button
          onClick={handleOpen}
          variant="contained"
          sx={{ mb: 4, fontSize: 18 }}
        >
          Editar
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <div>Editar paciente</div>
            <form>
              <div sx={{ display: "flex", flexDirection: "row" }} className="">
                <TextField
                  className="input-item"
                  sx={{ mb: 2, mt: 2, mr: 2 }}
                  id="outlined-basic"
                  label="Nombres"
                  variant="outlined"
                ></TextField>
                <TextField
                  className="input-item"
                  sx={{ mb: 2, mt: 2 }}
                  id="outlined-basic"
                  label="Apellidos"
                  variant="outlined"
                ></TextField>
              </div>
              <div>
                <TextField
                  sx={{ mb: 2 }}
                  fullWidth
                  id="outlined-basic"
                  label="Fecha de nacimiento"
                  variant="outlined"
                ></TextField>
              </div>
              <div sx={{ display: "flex", flexDirection: "row" }}>
                <TextField
                  sx={{ mb: 2, mr: 2 }}
                  id="outlined-basic"
                  label="Direccion"
                  variant="outlined"
                ></TextField>
                <TextField
                  sx={{ mb: 2 }}
                  id="outlined-basic"
                  label="Codigo postal"
                  variant="outlined"
                ></TextField>
              </div>
              <div>
                <TextField
                  sx={{ mb: 2 }}
                  fullWidth
                  id="outlined-basic"
                  label="Telefono"
                  variant="outlined"
                ></TextField>
              </div>
              <div sx={{ display: "flex", flexDirection: "row" }}>
                <TextField
                  sx={{ mb: 2, mr: 2 }}
                  id="outlined-basic"
                  label="Peso"
                  variant="outlined"
                ></TextField>
                <TextField
                  sx={{ mb: 2 }}
                  id="outlined-basic"
                  label="Altura"
                  variant="outlined"
                ></TextField>
              </div>
              <div>
                <TextField
                  sx={{ mb: 2 }}
                  fullWidth
                  id="outlined-multiline-static"
                  label="Descripcion de antecedentes"
                  multiline
                  rows={4}
                />
              </div>
              <Button sx={{ color: "#30a490" }}>Hacer cambios </Button>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default EditUser;
