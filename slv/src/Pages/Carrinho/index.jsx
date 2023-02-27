import React from "react";
import { useState } from "react";
import { CarrinhoArea } from "../../Pages/Carrinho/styled";
import { getItem, setItem } from "../../Services/LocalStorege";
import { BsFillCartDashFill } from "react-icons/bs";

const Carrinho = () => {
  const [data, setData] = useState(getItem("carrinho01") || []);

  const removeItem = (obj) => {
    const arrFilter = data.filter((livro) => livro.id !== obj.id);
    setData(arrFilter);
    setItem("carrinho01", arrFilter);
  };

  const subTotal = data.reduce((acc, cur) => acc + cur.Price, 0);

  return (
    <CarrinhoArea>
      <h2>{`SubTotal: R$ ${subTotal}`}</h2>
      <div>
        {data.map((livro, index) => 
          <div key={index}>
            <h4>{livro.title}</h4>
            <img src={livro.capa} alt={livro.title} />
            <h4>{`R$ ${livro.Price}`}</h4>
            <button onClick={() => removeItem(livro)}>
              <BsFillCartDashFill />
            </button>
          </div>
       )}
      </div>
    </CarrinhoArea>
  );
};

export default Carrinho;