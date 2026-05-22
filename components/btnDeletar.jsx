'use client';
import { toast } from 'sonner';
import {deletar_Aluno}  from '@/modulos/alunos/controler/alunosActions';
import { useRouter } from 'next/navigation';

export default function deleteButton({ id }) {
  const router = useRouter();

  async function handleDelete() {
    const res = await deletar_Aluno(id);
    if (res.success) {
      toast.success(res.message);

    } else {
      toast.error(res.error);
    }

    router.refresh(); // atualização real
  }

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 hover:bg-red-600 transition text-white px-3 py-1.5 rounded-lg text-sm"
    >
      Deletar
    </button>
  );
}