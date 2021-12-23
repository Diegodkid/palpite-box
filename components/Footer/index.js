import React from "react";

const Footer = () => {
   return (
      <React.Fragment>
         <div className="bg-[#000409] p-6">
         <div className="container mx-auto text-center text-blue-200 ">
            <div>
               Projeto desenvoldivo por:
            </div>
            </div>
            <div className="container mx-auto flex justify-center my-10">
               <a target='_blank'
                   href="https://diegodkid.github.io/">
                  <img className="animate-pulse" src="/diegos.png" alt="" />
               </a>
               
            </div>
            <div className="container flex flex-col gap-6 font-bold text-[#694201] md:flex-row  md:mx-auto md:justify-around">
               <a target='_blank' className="flex gap-6 justify-center text-xl target-blank hover:underline underline-offset-4"
               href="https://www.linkedin.com/in/diego-solit-527259217/">
               <img src="/linkd.png" alt="incone linkdlin" />
               DiegoSolit
               </a>
               <a target='_blank' className="flex gap-6 justify-center text-xl target-blank hover:underline underline-offset-8"
               href="https://wa.me/556791884338">
               <img src="/zap.png" alt="incone whatsapp" />
               WhatsApp
               </a>
               <a target='_blank' className="flex gap-6 justify-center text-xl target-blank hover:underline underline-offset-8"
               href="https://github.com/Diegodkid">
               <img src="/git.png" alt="icone github" />
               Diegodkid
               </a>
            </div>
         </div>
      </React.Fragment>
   )
}
export default Footer