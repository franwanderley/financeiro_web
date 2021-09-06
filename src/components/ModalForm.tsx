import React, { FormEvent, useContext, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { ReceitasContext } from '../providers/ReceitaContext';
import '../styles/modal-form.css';

export function ModalForm(){
   const { closeModalForm, receitaEditable, addReceitas, editReceitas } = useContext(ReceitasContext);
   const [nome, setNome] = useState<string>(receitaEditable?.nome || "");
   const [preco, setPreco] = useState<number>(receitaEditable?.preco || 0);
   const [descricao, setDescricao] = useState<string>(receitaEditable?.descricao || "");
   const [tipo, setTipo] = useState<string>(receitaEditable?.tipo || "DESPESA");
   const [data, setData] = useState<string>(formatDate(receitaEditable?.data) || "");

   function handleSubmit(f : FormEvent){
      f.preventDefault();
      const funcionario = {
      id: 2,
      nome: "Davi Bezerra",
      email: "davi1808@gmail.com",
      senha: "sobral345",
      nivel_de_acesso: "USER",
      cargo: "Vendedor"
      }
      if(receitaEditable)
         editReceitas({
            id : receitaEditable.id,
            nome, 
            tipo,
            data : formatDate(data),
            descricao,
            funcionario, 
            preco
         });
      else
         addReceitas({
            nome, 
            tipo, 
            data : formatDate(data), 
            descricao, 
            funcionario, 
            preco
         });

      setNome("");
      setPreco(0);
      setDescricao("");
      setData("");
      setTipo("");
      closeModalForm();
   }
   function formatDate(data : string | undefined) {
      if(!data)
         return "";
      
      if(data.includes('/')){
         let date = data.split('/');
         const dateformat = date.reverse().join('-');
         return dateformat;
      }
      else{
         let date = data.split('-');
         const dateformat = date.reverse().join('/');
         return dateformat;
      }

  } 

   return (
      <div className="overlay">
         <div className="modalForm">
            <button onClick={closeModalForm} className="btnclose">
               <FiX/>
            </button>

            <h3>Nova Receita</h3>
            <form onSubmit={handleSubmit}>
               <div>
                  <label htmlFor="nome">Nome:</label>
                  <input value={nome} onChange={e => setNome(e.target.value)} type="text" required/>
               </div>
               <div>
                  <label htmlFor="nome">Funcionario:</label>
                  <select>
                     <option value={1}>Francisco Wanderley</option>
                     <option value={2}>Eduarda Landim</option>
                     <option value={3}>Virlania dos Santos</option>
                  </select>
               </div>
               <div className="juntos">
                     <div>
                        <label htmlFor="preco">Preço:</label>
                        <input 
                           onChange={e => setPreco(e.target.valueAsNumber)}
                           value={preco} 
                           type="number" 
                           required 
                           min={0}
                        />
                     </div>
                     <div>
                        <label htmlFor="data">Data:</label>
                        <input value={data} onChange={e => setData(e.target.value)} type="date" required/>
                     </div>
               </div>
               <div>
                  <label htmlFor="tipo">Tipo:</label>
                  <select value={tipo} onChange={e => setTipo(e.target.value)}>
                     <option value="DESPESA">Despesa</option>
                     <option value="LUCRO">Lucro</option>
                  </select>
               </div>
               <div>
                  <label htmlFor="descricao">Descrição</label>
                  <textarea 
                     value={descricao} 
                     onChange={e => setDescricao(e.target.value)} 
                     rows={5} maxLength={200} required/>
               </div>
               <button type="submit">Salvar</button>
            </form>
         </div>
      </div>
   );
}