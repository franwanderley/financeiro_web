import { createContext, ReactNode, useState } from "react";

export interface Receitas{
   id?: number;
   nome: string;
   tipo: string;
   descricao: string;
   data: string;
   preco: number;
   funcionario: {
      id: number,
      nome: string,
      email: string,
      senha: string,
      cargo: string,
      nivel_de_acesso: string
   }  
 }

 interface ReceitasContextData{
  receitas: Receitas[] | undefined;
  isOpenModalDetail: boolean;
  isOpenModalForm:boolean;
  receitaEditable: Receitas | undefined;
  changeReceitaEditable: (receita : Receitas) => void;
  editReceitas: (receita: Receitas) => void
  addReceitas: (receita: Receitas) => void;
  deleteReceitas: (receita: Receitas) => void;
  openModalDetail: () => void;
  openModalForm: () => void;
  closeModalDetail: () => void;
  closeModalForm: () => void;
 }

 interface ReceitasProviderProps{
  children: ReactNode;
}

export const ReceitasContext = createContext({} as ReceitasContextData);
export function ReceitasProvider({ children } : ReceitasProviderProps) {
  const [receitas, setReceitas] = useState<Receitas[]>([
   {
      id: 1,
      nome: "Conta de Luz",
      descricao: "Conta de Luz da empresa!",
      preco: 432.89,
      data: "23/08/2021",
      tipo: "DESPESA",
      funcionario: {
          id: 1,
          nome: "Francisco Wanderly",
          email: "wanderley3101@gmail.com",
          senha: "sobral123",
          cargo: "Desenvolvedor FullStack",
          nivel_de_acesso: "ADMIN"
      }
  }
  ]);
  const [receitaEditable, setReceitaEditable] = useState<Receitas>();
  const [isOpenModalDetail, setIsOpenModalDetail] = useState(false);
  const [isOpenModalForm, setIsOpenModalForm] = useState(false);

  async function addReceitas(receita: Receitas){
 
    if(!receita){
      throw new Error('Receita vazia');
    }
    //Por enqunto que não está salvando no BD
    receita.id = receitas.length + 1;

    //Salvar no context
    if(receitas)
      setReceitas([
        ...receitas,
        receita
      ]);
    else
      setReceitas([receita]);
  }
  async function editReceitas(receita: Receitas){
    if(! receita)
      throw new Error('Receita Vazio!');

   if(! receitas)
      return ;
     

    //1 parte excluir
    const newreceitas = receitas.filter(p => p.id !== receita.id);
    newreceitas.push(receita);
    newreceitas.sort((a,b) => {
      if((a.id || 0) < (b.id || 0))
        return -1;
      return 1;
    });
    //2 parte adiciona
     setReceitas(newreceitas);
  }
  async function deleteReceitas(receita: Receitas){
    

    const newReceitas = receitas?.filter(p => p.id !== receita.id);
    setReceitas(newReceitas);
  }
  function changeReceitaEditable(receita : Receitas | undefined){
    openModalForm();
    setReceitaEditable(receita);
  }

  function openModalDetail(){
    setIsOpenModalDetail(true);
  }
  function openModalForm(){
    setIsOpenModalForm(true);
  }
  function closeModalDetail(){
    setIsOpenModalDetail(false);
  }
  function closeModalForm(){
    changeReceitaEditable(undefined);
    setIsOpenModalForm(false);
  }

  return (
    <ReceitasContext.Provider value={{receitas,changeReceitaEditable, receitaEditable, addReceitas, editReceitas, deleteReceitas, isOpenModalDetail, isOpenModalForm, openModalDetail, openModalForm,  closeModalDetail, closeModalForm }}>
          {children}
      </ReceitasContext.Provider>
  );
}