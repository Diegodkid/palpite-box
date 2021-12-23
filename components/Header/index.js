import React from "react";
import styles from "./styles.module.css"
import Link from "next/link";

const Header = () => {
   return (
   <React.Fragment>
      <div className={styles.wapper}>
         <div className='mx-auto flex justify-center'>
         <Link href='/'>
            <a>
            <img src="/logo_palpitebox.png" alt="logo palpitebox" />
            </a>
         </Link>
         </div>
      </div>
      <div className="bg-[#000409] p-4 text-blue-200 shadow-md font-bold text-center">
         <Link href='/sobre'>
            <a className="px-5 md:px-10 hover:underline">Sobre</a>
         </Link>
         <Link href='/contato'>
            <a className="px-5 md:px-10 hover:underline">Contato</a>
         </Link>
         <Link href='/pesquisa'>
            <a className="px-5 md:px-10 hover:underline">Pesquisa</a>
         </Link>
      </div>
   </React.Fragment>   
   )
}
export default Header