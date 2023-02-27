import axios from "axios";
import React, { useState } from "react";
import { BtnDefaut } from "../../Components/Styled";
import { ContainerPage } from "./styled";

const CrudLivros = () => {
  const [livro, setLivro] = useState({});

  const handleChangeLivro = (propriedade, valor) => {
    const livrocopia = livro;
    livrocopia[propriedade] = valor;
    console.log(livrocopia);
    setLivro(livrocopia);
  };

  const salvar = (evento) => {
    evento.preventDefault();
    axios.post("http://localhost:5000/book", livro).then((response) => {
      setLivro({})
      console.log(livro)
    });
  };

  return (
    <ContainerPage>
      <div>
        <form>
          <div className="form--input">
            <label>Titulo:</label>
            <input
              onChange={(evento) => handleChangeLivro("title", evento.target.value)
              }
              type="text"
            ></input>
          </div>
          <div className="form--input">
            <label>Autor:</label>
            <input
              onChange={(evento) => handleChangeLivro("autor", evento.target.value)
              }
              type="text"
            ></input>
          </div>
          <div className="form--input">
            <label>Editora:</label>
            <input
              onChange={(evento) => handleChangeLivro("editora", evento.target.value)
              }
              type="text"
            ></input>
          </div>
          <div className="form--input">
            <label>Capa:</label>
            <input
              onChange={(evento) => handleChangeLivro("capa", evento.target.value)
              }
              type="text"
            ></input>
          </div>
          <div className="form--input">
            <label>Preço:</label>
            <input
              onChange={(evento) => handleChangeLivro("Price", Number(evento.target.value))
              }
              type="number"
            ></input>
            <div className="footerCrudLivros">
              URL para IMG...: 
              <a href="https://www.base64-image.de/"> Base64-image</a>
            </div>
          </div>
          <BtnDefaut onClick={salvar}>Salvar</BtnDefaut>
        </form>
      </div>
    </ContainerPage>
  );
};

export default CrudLivros;
