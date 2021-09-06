import React, { useContext } from 'react';
import { FiPlus } from 'react-icons/fi';
import { ReceitasContext } from '../providers/ReceitaContext';
import '../styles/header-table.css';


export function HeaderTable(){
   const { receitas, openModalForm } = useContext(ReceitasContext);

   return (
      <div className="headerTable">
         <div className="titulo">
            <h2>Invoices</h2>
            <p>There are {receitas?.length} total invoices</p>
         </div>
         <div className="options">
            <select>
               <option value="nome"> Filters by nome </option>
               <option value="preco"> Filters by price </option>
               <option value="funcionario"> Filters by Oficial</option>
               <option value="tipo"> Filters by type</option>
            </select>
            <button onClick={openModalForm}>
               <div className="btnIcon"> <FiPlus color="#7c5df9" size={30}/> </div>
               New Invoice
            </button>
         </div>
      </div>
   );
}