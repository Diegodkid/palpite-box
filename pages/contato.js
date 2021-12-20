import React from "react";
import Link from "next/link";
import PageTitle from "../components/Page/Title";

const Contato = () => {
   return (
      <div>
         <PageTitle title='Contato' />
         <h1>Contato</h1>
         <Link href='/'>
            <a>Home</a>
         </Link>
      </div>
   )
}
export default Contato