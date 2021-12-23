import React from "react";
import Link from "next/link"
import PageTitle from "../components/Page/Title";

const Sobre = () => {
   return (
      <div className="my-12 text-center">
            <PageTitle title='Sobre' />
         <div className="bg-red-50 rounded-md p-4 shadow-md">
            <img className="w-96 mx-auto rounded-md shadow" src="/food.jpg" alt="" />
            <h1 className="my-6 border-b w-64 mx-auto border-red-400 text-red-600">Almoço com gosto de lembranças</h1>
            <p className="text-slate-700">There are many variations of passages of Lorem Ipsum available, but the majority have suffered<br/> alteration in some form, by injected humour, or randomised words which don't look even slightly <br/>believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of <br/>text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as <br/>necessary, making this the first true generator on the Internet. </p>
         </div>

         </div>
   )
}
export default Sobre
