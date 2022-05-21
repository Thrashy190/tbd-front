import React, { useState } from "react";
import "./UserList.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import EditUser from "./EditUser";
import DeleteInfo from "./DeleteInfo";

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

const ItemList = ({ setData, data, onDeleteBloque }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="container-all row-card">
        <div className="container-card column-card" onClick={handleOpen}>
          <div className="space">
            Nombre del paciente: {data.nombre} {data.apellidos}
          </div>
          <div className="space">Feche de registro: {data.fecha_registro}</div>
          <div className="space">Telefono: {data.telefono}</div>
        </div>
        <div className="container-button column-card">
          <EditUser />
          <DeleteInfo
            setData={setData}
            data={data}
            id={data.id}
            onDeleteBloque={onDeleteBloque}
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
              Paciente: {data.nombre} {data.apellidos}
            </div>
            <div>Feche de registro: {data.fecha_registro}</div>
            <div>Telefono: {data.telefono}</div>
            <div>Fecha de nacimiento: {data.fecha_nacimiento}</div>
            <div>
              <div>Direccion: {data.direccion}</div>
              <div>Codigo postal: {data.codigo_postal}</div>
            </div>
            <div>
              <div>Altura: {data.altura}</div>
              <div>Peso: {data.peso}</div>
            </div>
            <div>Antecedentes: {data.antecedentes}</div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

const UserList = ({ setData, data }) => {
  const onDeleteBloque = (idBlock) => {
    console.log(data);
    const copia = [...data];
    let indiceABorrar = copia.findIndex((block) => idBlock === block.id);
    copia.splice(indiceABorrar, 1);
    setData(copia);
  };

  return (
    <div>
      <div>
        {data.map((item) => {
          return (
            <ItemList
              key={item.id}
              setData={setData}
              data={item}
              onDeleteBloque={onDeleteBloque}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
