import React from 'react';
import { useContext } from 'react';
import { FiEdit, FiInfo, FiTrash } from 'react-icons/fi';
import { Receitas, ReceitasContext} from '../providers/ReceitaContext';
import '../styles/line-table.css';
import { ModalDetail } from './ModalDetail';

export function LineTable({receita}: {receita: Receitas}){
   const { isOpenModalDetail, openModalDetail, changeReceitaEditable } = useContext(ReceitasContext);
   return (
      <div key={receita.id} className="lineTable">
         {isOpenModalDetail && <ModalDetail receita={receita}/>}

         <p className="bolder">{receita.nome}</p>
         <p className="data">{receita.data}</p>
         <p className="funcionario">{receita.funcionario.nome}</p>
         <p className="bolder">{receita.preco}</p>
         <p style={ receita.tipo === "LUCRO" ? 
            { background: "#1d2c3e", color: "#49c1a6" }
         :
            { background: "#2b2833", color:"#df9235" }
         } className="type">
               {receita.tipo}
         </p>
         <div className="btn">
         <button onClick={ _ => changeReceitaEditable(receita)}>
            <FiEdit color="#3d2d7d" /> 
         </button>
         <button> 
            <FiTrash color="#77292c" />
         </button>
         <button onClick={openModalDetail}>
            <FiInfo color="#f4f4f6" /> 
         </button>

         </div>
      </div>
   );
}