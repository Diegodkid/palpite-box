import React from "react";
import Link from "next/link";


const Index = () => {
   return (
      <div>
         <p className="mt-12 text-center font-bold">
         O restaurante X sempre busca por atender melhor seus clientes.<br />
         Por isso, estamos sempre abertos a ouvir a sua opinião.
         </p>
         <div className="text-center my-12">
            <Link href='/pesquisa'>
               <a className="bg-cyan-700 text-blue-50 px-6 py-4 font-bold rounded-md hover:bg-cyan-600 duration-500 shadow-lg">Dar opinião ou sugestão</a>
            </Link>
         </div>
         <p className="my-10 text-center">
            Mensagem do desconto.
         </p>
      </div>
   ) 
}


export default Index