'use client';

import { useFormStatus } from 'react-dom';

export default function btnCadastrar(){
  const { pending } = useFormStatus();

  return (
    <button
    type="submit"
    disabled={pending}
    className="w-full bg-blue-600 text-white py-2 rounded-lg">

     {pending ? 'Salvando...' : 'Cadastrar Aluno'}   
    </button>

  );

}