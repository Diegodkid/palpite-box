import React from "react";
import Link from "next/link";
import PageTitle from "../components/Page/Title";

const Contato = () => {
   return (
      <div className="my-8">
         <PageTitle title='Contato' />
         <div className="flex flex-col gap-6 p-4 mb-6">
            <div className="flex justify-center">
               <a className="gap-4 flex hover:underline underline-offset-2" href="#">
                  <img src="face.png" alt="icone facebook" />
                  Lembrança casa
               </a>
            </div>
            <div className="flex justify-center">
               <a className="gap-4 flex hover:underline underline-offset-2" href="#">
                  <img src="instagram.png" alt="icone facebook" />
                  Lembrança casa
               </a>
            </div>
            <div className="flex justify-center">
               <a className="gap-4 flex hover:underline underline-offset-2" href="#">
                  <img src="whats.png" alt="icone facebook" />
                  55 67 9999-9999
               </a>
            </div>
         </div>
         <a href="#">
         <img className="rounded-md shadow-md mx-auto" src="map.jpg" alt="" />
         </a>
      </div>
   )
}
export default Contato