import React, { useEffect, useState } from "react";
import { Input, Modal } from "antd";
import axios from "axios";

const ModalEditar = ({ data, isModalOpen, closeModal, setLivroEditar }) => {
  const [titulo, setTitulo] = useState(data.titulo);
  const [autor, setAutor] = useState(data.autor);
  const [editora, setEditora] = useState(data.editora);
  const [Price, setPrice] = useState(data.Price);
  const [preview, setPreview] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [livro, setLivro] = useState({});

  const handleChangeLivro = (propriedade, valor) => {
    const livrocopia = livro;
    livrocopia[propriedade] = valor;
    console.log(livrocopia);
    setLivro(livrocopia);
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

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;}

    const objectUrl = URL.createObjectURL(selectedFile);
       setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
       }, [selectedFile]);

    const onSelectFile = async (e) => {
     if (!e.target.files || e.target.files.length === 0) {
       setSelectedFile(undefined);
       return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function () {
      handleChangeLivro("capa", reader.result);
    };
    reader.onerror = function (error) {
      handleChangeLivro("capa", null);
    };
    setSelectedFile(e.target.files[0]);
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
        {selectedFile && <img src={preview} alt=" "/>}
          <input type="file" accept="image/*" onChange={onSelectFile} />
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
