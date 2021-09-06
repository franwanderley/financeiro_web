import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { Header } from '../components/Header';
import { HeaderTable } from '../components/HeaderTable';
import { LineTable } from '../components/LineTable';
import { ModalForm } from '../components/ModalForm';
import { ReceitasContext } from '../providers/ReceitaContext';

import "../styles/home.css";

export function Home(){
   const { receitas, isOpenModalForm } = useContext(ReceitasContext);

   useEffect(() => {
      async function getFuncionarios(){
         await axios.get("http://localhost:8080/funcionarios")
         .then(res => console.log(res.data))
         .catch(err => console.log("nÃO pASSOU"))
      }
      getFuncionarios();
   }, []);

   return (
      <div className="home">
         {isOpenModalForm && <ModalForm/> }
         <Header/>
         <div className="main">
            <HeaderTable/>
            <div className="table">
              {receitas?.map(r => (
                 <LineTable receita={r}/>
              ))}
            </div>
         </div>
      </div>   
   );
}