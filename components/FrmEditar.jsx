'use client';


import { useRef } from 'react';
import { toast } from 'sonner';

import { useRouter } from 'next/navigation';
import SubmitButton from './btnCadastrar';

export default function AlunoForm() {
  const router = useRouter();
  const formRef = useRef(null);

  async function handleAction(formData) {
    const res = await createAlunoAction(formData);

    if (res.success) {
      toast.success(res.message);
      formRef.current?.reset();
      router.refresh(); // atualiza listagem
    } else {
      toast.error(res.error);
    }
  }


return (
    <form
    ref={formRef}
    action={handleAction}>
  
   
      <div className=" h-full w-full gap-10 rounded-3xl">
      
        <div className=" px-5 flex gap-10 mt-5  ">
          <div className="w-full flex flex-col ">
            <h1 className="text-black ">Nome</h1>
            <input
              id="nome"
              name="nome"
              type="text"
              placeholder="Ex: João da Silva"
              className="border rounded p-2 text-gray-400 h-12 w-full"></input>
          </div>

    
        </div>

        <div className=" px-5 gap-10 flex mt-5  ">
          <div className="w-full ">
            <h1 className="text-black ">Curso</h1>
            <input
             id="matricula"
              name="matricula"
              type="text"
              placeholder="Ex: 1103248"
              className="border rounded p-2 text-gray-400 h-12 w-full"
            ></input>
          </div>
     
        </div>

     

        <div className="md:col-span-2 flex justify-end px-5 py-4">
            <SubmitButton/>
        </div>

      </div>
    </form>
   
    
      
      
  
  );
  }


