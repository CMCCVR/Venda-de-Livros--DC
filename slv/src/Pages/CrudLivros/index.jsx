import axios from "axios";
import React, { useEffect, useState } from "react";
import { BtnDefaut } from "../../Components/Styled";
import { ContainerPage } from "./styled";

const CrudLivros = () => {
  const [livro, setLivro] = useState({});
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const handleChangeLivro = (propriedade, valor) => {
    const livrocopia = livro;
    livrocopia[propriedade] = valor;
    console.log(livrocopia);
    setLivro(livrocopia);
  };

  const salvar = (evento) => {
    evento.preventDefault();
    axios.post("http://localhost:5000/book", livro).then((response) => {
      setLivro({});
      console.log(livro);
    });
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

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
    <ContainerPage>
      <div>
        <form>
          <div className="form--input">
            <label>Titulo:</label>
            <input
              onChange={(evento) =>
                handleChangeLivro("title", evento.target.value)
              }
              type="text"
            ></input>
          </div>
          <div className="form--input">
            <label>Autor:</label>
            <input
              onChange={(evento) =>
                handleChangeLivro("autor", evento.target.value)
              }
              type="text"
            ></input>
          </div>
          <div className="form--input">
            <label>Editora:</label>
            <input
              onChange={(evento) =>
                handleChangeLivro("editora", evento.target.value)
              }
              type="text"
            ></input>
          </div>

          <div className="form--input">
            <label>Preço:</label>
            <input
              onChange={(evento) =>
                handleChangeLivro("Price", Number(evento.target.value))
              }
              type="number"
            ></input>
            {selectedFile && <img src={preview} alt=" " />}
            <input type="file" accept="image/*" onChange={onSelectFile} />
          </div>
          <BtnDefaut onClick={salvar}>Salvar</BtnDefaut>
        </form>
      </div>
    </ContainerPage>
  );
};

export default CrudLivros;
