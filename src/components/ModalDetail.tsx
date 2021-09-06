import React from 'react';
import { useContext } from 'react';
import { FiX } from 'react-icons/fi';
import { Receitas, ReceitasContext } from '../providers/ReceitaContext';
import '../styles/modal-detail.css';


export function ModalDetail({receita} : {receita : Receitas}){
   const { closeModalDetail } = useContext(ReceitasContext);

   return (
      <div className="overlay">
         <div className="modalDetail">
            <button onClick={closeModalDetail} className="btnclose">
               <FiX/>
            </button>
            <div className="header">
               <h4>{receita.nome}</h4>
               <p style={ receita.tipo === "LUCRO" ? 
                  { background: "#1d2c3e", color: "#49c1a6" }
               :
                  { background: "#2b2833", color:"#df9235" }
               } className="type">
                  {receita.tipo}
               </p>
            </div>
            <div className="info">
               <div>
                  <p>Nome do Funcionario</p>
                  <p>{receita.funcionario.nome}</p>
               </div>
               <div>
                  <p>Data</p>
                  <p>{receita.data}</p>
               </div>
               <div>
                  <p>Cargo do Funcionario</p>
                  <p>{receita.funcionario.cargo}</p>
               </div>
            </div>
            <div className="description">
               <p>Descrição</p>
               <p>{receita.descricao}</p>
            </div>
            <div className="price">
               <p>Preço:</p>
               <p>{receita.preco}</p>
            </div>
         </div>
      </div>
   );
}