import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';

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

const AddUser = ({ setData, data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [dataTemplate, setDataTemplate] = useState({
    id_paciente: Math.random() * (1000 - 0) + 0,
    nombre: 'Diego',
    apellido: 'Lopez',
    fecha_nacimiento: '2002/07/02 21:02:44',
    direccion: 'Montessori',
    telefono: 123123,
    cp: 123123,
    peso: 123123,
    altura: 123123,
    fecha_registro: '2002/07/02 21:02:44',
    antecedentes: '1swdcwdcw wefdcwe cdwe',
  });

  const handleChange = (prop) => (event) => {
    setDataTemplate({ ...dataTemplate, [prop]: event.target.value });
  };

  const onSubmitForm = async (e) => {
    // const fecha = new Date()

    try {
      const response = await fetch('http://localhost:3000/pacientes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataTemplate),
      });
      setData([dataTemplate, ...data]);
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
          sx={{ color: 'white', fontSize: 15 }}
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
          <form onSubmit={() => onSubmitForm()}>
            <div sx={{ display: 'flex', flexDirection: 'row' }} className="">
              <TextField
                value={dataTemplate.nombre}
                onChange={handleChange('nombre')}
                className="input-item"
                sx={{ mb: 2, mt: 2, mr: 2 }}
                id="outlined-basic"
                label="Nombres"
                variant="outlined"
              ></TextField>
              <TextField
                value={dataTemplate.apellido}
                onChange={handleChange('apellido')}
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
                onChange={handleChange('fecha_nacimiento')}
                sx={{ mb: 2 }}
                fullWidth
                id="outlined-basic"
                label="Fecha de nacimiento"
                variant="outlined"
              ></TextField>
            </div>
            <div sx={{ display: 'flex', flexDirection: 'row' }}>
              <TextField
                value={dataTemplate.direccion}
                onChange={handleChange('direccion')}
                sx={{ mb: 2, mr: 2 }}
                id="outlined-basic"
                label="Direccion"
                variant="outlined"
              ></TextField>
              <TextField
                value={dataTemplate.cp}
                onChange={handleChange('cp')}
                sx={{ mb: 2 }}
                id="outlined-basic"
                label="Codigo postal"
                variant="outlined"
              ></TextField>
            </div>
            <div>
              <TextField
                value={dataTemplate.telefono}
                onChange={handleChange('telefono')}
                sx={{ mb: 2 }}
                fullWidth
                id="outlined-basic"
                label="Telefono"
                variant="outlined"
              ></TextField>
            </div>
            <div sx={{ display: 'flex', flexDirection: 'row' }}>
              <TextField
                value={dataTemplate.peso}
                onChange={handleChange('peso')}
                sx={{ mb: 2, mr: 2 }}
                id="outlined-basic"
                label="Peso"
                variant="outlined"
              ></TextField>
              <TextField
                value={dataTemplate.altura}
                onChange={handleChange('altura')}
                sx={{ mb: 2 }}
                id="outlined-basic"
                label="Altura"
                variant="outlined"
              ></TextField>
            </div>
            <div>
              <TextField
                value={dataTemplate.antecedentes}
                onChange={handleChange('antecedentes')}
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

export default AddUser;
