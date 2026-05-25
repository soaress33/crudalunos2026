'use client';
import { toast } from 'sonner';
import {deletar_Aluno}  from '@/modulos/alunos/controler/alunosActions';
import { useRouter } from 'next/navigation';
import { Trash } from 'lucide-react';

export default function deleteButton({ id }) {
  const router = useRouter();

  async function handleDelete() {
    const res = await deletar_Aluno(id);
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) Swal.fire({
    title: "Deleted!",
    text: "Your file has been deleted.",
    icon: "success"
  });
});

    router.refresh(); // atualização real
  }

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 flex items-center gap-3 p-2 hover:bg-red-600 transition text-white  rounded-lg text-sm"
    >
      <Trash />
      Deletar
    </button>
  );
}