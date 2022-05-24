import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const EditUser = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [dataToEdit, setDataToEdit] = useState({
    nombre: data[1],
    apellido: data[2],
    direccion: data[4],
    telefono: data[5],
    cp: data[6],
    peso: data[7],
    altura: data[8],
    antecedentes: '1swdcwdcw wefdcwe cdwe',
  });

  const handleEdit = (prop) => (event) => {
    console.log(data);
    console.log(dataToEdit);
    setDataToEdit({ ...dataToEdit, [prop]: event.target.value });
  };

  const updateDescription = async (e) => {
    try {
      const response = await fetch(
        `http://localhost:3000/pacientes/${data[0]}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataToEdit),
        }
      );

      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <div>
        <Button
          variant="contained"
          onClick={handleOpen}
          sx={{ color: 'white', fontSize: 15, mb: 4 }}
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
          <div>Agregar paciente</div>
          <form onSubmit={() => updateDescription()}>
            <div sx={{ display: 'flex', flexDirection: 'row' }} className="">
              <TextField
                value={dataToEdit.nombre}
                onChange={handleEdit('nombre')}
                className="input-item"
                sx={{ mb: 2, mt: 2, mr: 2 }}
                id="outlined-basic"
                label="Nombres"
                variant="outlined"
              ></TextField>
              <TextField
                value={dataToEdit.apellido}
                onChange={handleEdit('apellido')}
                className="input-item"
                sx={{ mb: 2, mt: 2 }}
                id="outlined-basic"
                label="Apellidos"
                variant="outlined"
              ></TextField>
            </div>

            <div sx={{ display: 'flex', flexDirection: 'row' }}>
              <TextField
                value={dataToEdit.direccion}
                onChange={handleEdit('direccion')}
                sx={{ mb: 2, mr: 2 }}
                id="outlined-basic"
                label="Direccion"
                variant="outlined"
              ></TextField>
              <TextField
                value={dataToEdit.cp}
                onChange={handleEdit('cp')}
                sx={{ mb: 2 }}
                id="outlined-basic"
                label="Codigo postal"
                variant="outlined"
              ></TextField>
            </div>
            <div>
              <TextField
                value={dataToEdit.telefono}
                onChange={handleEdit('telefono')}
                sx={{ mb: 2 }}
                fullWidth
                id="outlined-basic"
                label="Telefono"
                variant="outlined"
              ></TextField>
            </div>
            <div sx={{ display: 'flex', flexDirection: 'row' }}>
              <TextField
                value={dataToEdit.peso}
                onChange={handleEdit('peso')}
                sx={{ mb: 2, mr: 2 }}
                id="outlined-basic"
                label="Peso"
                variant="outlined"
              ></TextField>
              <TextField
                value={dataToEdit.altura}
                onChange={handleEdit('altura')}
                sx={{ mb: 2 }}
                id="outlined-basic"
                label="Altura"
                variant="outlined"
              ></TextField>
            </div>
            <div>
              <TextField
                value={dataToEdit.antecedentes}
                onChange={handleEdit('antecedentes')}
                sx={{ mb: 2 }}
                fullWidth
                id="outlined-multiline-static"
                label="Descripcion de antecedentes"
                multiline
                rows={4}
              />
            </div>
            <Button type="submit" value="Submit" sx={{ color: '#30a490' }}>
              Registrar paciente
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default EditUser;
