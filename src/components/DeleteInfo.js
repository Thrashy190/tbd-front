import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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

const DeleteInfo = ({ setData, data, id, name }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:3000/pacientes/${id}`, {
        method: 'DELETE',
      });
      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <div>
        <Button onClick={handleOpen} variant="contained" sx={{ fontSize: 18 }}>
          Borrar
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
            <div>¿Estas seguro que deseas eliminar al paciente {name} ?</div>
            <Button onClick={() => deleteTodo(id)}>Eliminar</Button>
            <Button onClick={handleClose}>Cancelar</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteInfo;
