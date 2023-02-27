import React from "react";
import { ProductArea } from "../Livros/styled";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsFillCartPlusFill, BsFillCartCheckFill } from "react-icons/bs";
// import { FaTrash, FaEdit } from "react-icons/fa";
import { getItem, setItem } from "../../Services/LocalStorege";
// import { Link } from "react-router-dom";
import ModalEditar from "./ModalEditar";

const Livros = () => {
  const [livros, setLivros] = useState([])

  const [livroEditar, setLivroEditar] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [cart, setCart] = useState(getItem("carrinho01") || []);

  useEffect(() => {
    carregarLivros();
  }, []);

  const carregarLivros = () => {
    axios.get("http://localhost:5000/books").then((response) => {
      console.log(response.data);
      setLivros(response.data);
    });
  };

  const handleCLick = (obj) => {
    const element = cart.find((livro) => livro._id === obj._id);
    if (element) {
      const arrFilter = cart.filter((livro) => livro._id !== obj._id);
      setCart(arrFilter);
      setItem("carrinho01", arrFilter);
    } else {
      setCart([...cart, obj]);
      setItem("carrinho01", [...cart, obj]);
    }
  };

const excluir = (id) => {
    axios.delete("http://localhost:5000/book/" + id).then((response) => {
      carregarLivros();
    });
  };

  const editarLivro = (livro) => {
    setLivroEditar(livro);
    openModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ProductArea>
        {livros?.map((livro) => (
          <div key={livro._id}>
            <span>{livro._title}</span>{" "}
            <span>
              {livro.title}
              <img src={livro.capa} alt="img" height={"200px"} width="100%" />
              <h2>{livro.autor}</h2>
              <h4>R$ {livro.Price && livro.Price.toFixed(2)}</h4>
            </span>
            <button onClick={() => handleCLick(livro)}>
              {cart.some((itemCart) => itemCart.id === livro.id) ? (
                <BsFillCartCheckFill />
              ) : (
                <BsFillCartPlusFill />
              )}
            </button>
            {/* <FaTrash > */}
            <button1 onClick={() => excluir(livro._id)}>Excluir</button1>
            {/* </FaTrash> */}
            {/* <FaEdit> */}
            <button2 onClick={() => editarLivro(livro)}>Editar</button2>
            {/* </FaEdit> */}
          </div>
        ))}
      </ProductArea>
     {livroEditar && <ModalEditar
        data={livroEditar}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        setLivroEditar={setLivroEditar}
      />}
    </>
  );
};

export default Livros;