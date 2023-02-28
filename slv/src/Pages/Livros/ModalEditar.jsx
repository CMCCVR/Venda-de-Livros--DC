import React, { useState } from "react";
import { Input, Modal } from "antd";
import axios from "axios";

const ModalEditar = ({ data, isModalOpen, closeModal, setLivroEditar }) => {
  const [titulo, setTitulo] = useState(data.titulo);
  const [autor, setAutor] = useState(data.autor);
  const [editora, setEditora] = useState(data.editora);
  const [capa, setCapa] = useState(data.capa);
  const [Price, setPrice] = useState(data.Price);

  const livro = {
    _id: data._id,
    titulo: titulo,
    autor: autor,
    editora: editora,
    capa: capa,
    Price: Price,
  };

  const onOk = () => {
    handleSubmit();
    setLivroEditar(null);
    closeModal();
  };

  const onCancel = () => {
    closeModal();
    setLivroEditar();
  };

  const handleSubmit = async () => {
    await axios
      .put(`http://localhost:5000/book/${data._id}`, livro)
      .then((response) => console.log("Atualizado com sucesso"))
      .catch((erro) => console.log("Deu erro"));
  };

  return (
    <Modal
      open={isModalOpen}
      onCancel={onCancel}
      title="Editar Livro"
      okText="Salvar Alterações"
      onOk={onOk}
    >
      <div style={{ gap: "8px", display: "flex", flexDirection: "column" }}>
        <Input placeholder="Id" value={data._id} />
        <Input
          placeholder="Titulo"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
        />
        <Input
          placeholder="Autor"
          value={autor}
          onChange={(event) => setAutor(event.target.value)}
        />
        <Input
          placeholder="Editora"
          value={editora}
          onChange={(event) => setEditora(event.target.value)}
        />
        <Input
          placeholder="Capa"
          value={capa}
          onChange={(event) => setCapa(event.target.value)}
        />
        <Input
          placeholder="Price"
          value={Price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>
    </Modal>
  );
};

export default ModalEditar;
