import React from "react";
import Link from "next/link";

const Pesquisa = () => {
   return (
      <div className="my-6">
         <h1 className="text-center font-bold my-4 text-2xl">Críticas e sugestões</h1>
         <p className="text-center">O restaurante X sempre busca por atender melhor seus clientes. <br/>
         Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
      <div className="w-80 my-4 flex flex-col mx-auto"> 
         <label className="font-bold">Seu nome: </label>  
         <input className="bg-blue-100 mt-1 mb-4 p-3 shadow-md rounded-md" type="text" />
         <label className="font-bold">E-mail: </label>  
         <input className="bg-blue-100 mt-1 mb-4 p-3 shadow-md rounded-md" type="email" />
         <label className="font-bold">Whatsapp: </label>  
         <input className="bg-blue-100 mt-1 mb-4 p-3 shadow-md rounded-md" type="fone" />
         <label className="font-bold">Sua crítica ou sugestão: </label>  
         <input className="bg-blue-100 mt-1 mb-4 p-3 shadow-md rounded-md" type="text" />
      </div>
      </div>
   )
}
export default Pesquisa