import React, { useState } from "react";
import PageTitle from "../components/Page/Title";

const Pesquisa = () => {
   const [ form, setForm ] = useState({
      Nome: '',
      Email: '',
      Whatsapp: '',
      Nota: ''
   })

   const [ sucess, setSucess ] = useState(false)
   const [ retorno, setRetorno ] = useState({})
         
   const save = async () => {
      try {
         const response = await fetch('/api/save', {
            method: 'POST',
            body: JSON.stringify(form)
         })
         const data = await response.json()
         setSucess(true)
         setRetorno(data)
      } catch (err) {
         
      }
   }
   const onChange = evt => {
      const value = evt.target.value
      const key = evt.target.name
      setForm(old => ({
         ...old,
         [key]: value
      }))
   }
   
   return (
      <div className="my-6">
         <PageTitle title='Pesquisa' />
         <h1 className="text-center font-bold my-4 text-2xl">Críticas e sugestões</h1>
         <p className="text-center">O restaurante X sempre busca por atender melhor seus clientes. <br/>
         Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
      { !sucess && <div className="w-80 my-4 flex flex-col mx-auto"> 
         <label className="font-bold">Seu nome: </label>  
         <input className="bg-blue-100 mt-1 mb-4 p-3 shadow-md rounded-md" type="text" onChange={onChange} name="Nome" value={form.Nome}/>
         <label className="font-bold">E-mail: </label>  
         <input className="bg-blue-100 mt-1 mb-4 p-3 shadow-md rounded-md" type="email" onChange={onChange} name="Email" value={form.Email}/>
         <label className="font-bold">Whatsapp: </label>  
         <input className="bg-blue-100 mt-1 mb-4 p-3 shadow-md rounded-md" type="fone" onChange={onChange} name="Whatsapp" value={form.Whatsapp}/>


         <label className="font-bold">Sua crítica ou sugestão: </label>  
         <input className="bg-blue-100 mt-1 mb-4 p-3 shadow-md rounded-md" type="text" onChange={onChange} name="Crítica" value={form.Crítica} />

      <div className="my-4 flex gap-4 mx-auto">
         <div className="inline-grid gap-2 justify-items-center">
            <label htmlFor="Nota"><img src="/0.png" alt="" /></label>
            <input type="radio" name="Nota" value='0' onChange={onChange}/>
         </div>
         <div className="inline-grid gap-2 justify-items-center">
            <label htmlFor="Nota"><img src="/1.png" alt="" /></label>
            <input type="radio" name="Nota" value='1' onChange={onChange}/>
         </div>
         <div className="inline-grid gap-2 justify-items-center">
            <label htmlFor="Nota"><img src="/2.png" alt="" /></label>
            <input type="radio" name="Nota" value='2' onChange={onChange}/>
         </div>
         <div className="inline-grid gap-2 justify-items-center">
            <label htmlFor="Nota"><img src="/3.png" alt="" /></label>
            <input type="radio" name="Nota" value='3' onChange={onChange}/>
         </div>
         <div className="inline-grid gap-2 justify-items-center">
            <label htmlFor="Nota"><img src="/4.png" alt="" /></label>
            <input type="radio" name="Nota" value='4' onChange={onChange}/>
         </div>
         <div className="inline-grid gap-2 justify-items-center">
            <label htmlFor="Nota"><img src="/5.png" alt="" /></label>
            <input type="radio" name="Nota" value='5' onChange={onChange}/>
         </div>
      </div>
         <button className="bg-cyan-700 text-blue-50 px-6 py-4 font-bold rounded-md hover:bg-cyan-600 duration-500 shadow-lg" onClick={save}>Salvar</button>

      </div> }
      { sucess && <div className="w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/5 mx-auto my-10">
            <p className="bg-emerald-100 border-t border-b border-emerald-500 text-emerald-700 px-4 py-3 rounded shadow-md text-center">Obrigada por contrubuir com sua sugestão ou crítica.</p>
            {
               retorno.showCoupon && <div className="text-center p-4 border border-emerald-500 my-6 rounded-md">
                  Seu Cupom: <br/>
                  <span className="text-emerald-700 text-2xl">{retorno.Cupom}</span>
                  </div>
            }
            {
               retorno.showCoupon && <div className="text-center p-4 border border-emerald-500 my-6 rounded-md shadow-md">
                  <span className="text-emerald-700">{retorno.Promo}</span> <br/>
                  <span className="italic block mt-4">Tire um print ou foto e apresente em nossa loja</span>
                  </div>
            }
            
         </div>}
      </div>
   )
}
export default Pesquisa