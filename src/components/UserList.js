import React, { useState } from 'react';
import './UserList.css';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import EditUser from './EditUser';
import DeleteInfo from './DeleteInfo';

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

const ItemList = ({ setData, data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="container-all row-card">
        <div className="container-card column-card" onClick={handleOpen}>
          <div className="space">
            Nombre del paciente: {data[1]} {data[2]}
          </div>
          <div className="space">Feche de registro: {data[9]}</div>
          <div className="space">Telefono: {data[5]}</div>
        </div>
        <div className="container-button column-card">
          <EditUser />
          <DeleteInfo
            setData={setData}
            data={data}
            id={data[0]}
            name={data[1]}
          />
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <div>
              Paciente: {data[1]} {data[2]}
            </div>
            <div>Feche de registro: {data[9]}</div>
            <div>Telefono: {data[5]}</div>
            <div>Fecha de nacimiento: {data[3]}</div>
            <div>
              <div>Direccion: {data[4]}</div>
              <div>Codigo postal: {data[6]}</div>
            </div>
            <div>
              <div>Altura: {data[8]}</div>
              <div>Peso: {data[7]}</div>
            </div>
            <div>Antecedentes: {data.antecedentes}</div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

const UserList = ({ setData, data }) => {
  return (
    <div>
      <div>
        {data.map((item) => {
          return <ItemList key={item.id} setData={setData} data={item} />;
        })}
      </div>
    </div>
  );
};

export default UserList;
