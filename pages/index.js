import React from "react";
import Link from "next/link";
import useSWR from "swr";
import PageTitle from "../components/Page/Title";

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
   const { data, error } = useSWR('/api/get-promo', fetcher)

   return (
      <div className="my-44">
         <PageTitle title='Seja Bem Vindo' />
         <p className="text-center font-bold">
         O restaurante X sempre busca por atender melhor seus clientes.<br />
         Por isso, estamos sempre abertos a ouvir a sua opinião.
         </p>
         <div className="text-center my-12">
            <Link href='/pesquisa'>
               <a className="bg-cyan-700 text-blue-50 px-6 py-4 font-bold rounded-md hover:bg-cyan-600 duration-500 shadow-lg">Dar opinião ou sugestão</a>
            </Link>
         </div>
         { !data && <p>Carregando...</p> }
         { !error && data && data.showCoupon &&
            <p className="my-10 text-center">
               {data.message}
            </p>
         }
      </div>
   ) 
}


export default Index