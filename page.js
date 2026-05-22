import DeleteButton from "@/components/btnDeletar";
import ToastProvider from "@/components/ToastProvider";
import Modal from "@/components/BaseModal";
import FrmEditar from "@/components/FrmEditar";
import { Get_All_Registros } from "@/modulos/alunosActions/pegarTodos";
import GravarRegistro from "@/modulos/alunosActions/gravarRegistros";
import btnCadastrar from "@/components/btnCadastrar";
import AlunoForm from "@/components/alunoForm";
import  ModalEditar from "@/components/modalEditar";


export default async function Home() {
  const alunos = await Get_All_Registros();
  console.log(alunos);

  return (
    <div className="w-full min-h-screen flex flex-col gap-3  bg-gray-400 items-center justify-items-center ">
       <AlunoForm />

<div className="bg-white rounded-lg w-240   overflow-x-auto ">
     <table className=" border w-full   border-collapse  ">
        <thead>
          <tr className=" text-sm border-b gap-3 text-left  text-gray-500 ">
            <th className="py-2 px-4 text-left">Nome</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Curso</th>
            <th className="py-2 px-4 text-left">Turno</th>
            <th className="py-2 px-4 text-left">Sexo</th>
            <th className="py-2 px-4 text-center  ">Ações</th>
          </tr>
        </thead>

        <tbody>
          {alunos.map((aluno) => (
            <tr
              key={aluno.id}
              className="border-b  hover:bg-gray-50 text-black transition"
            >
              <td className="py-4 border-b">{aluno.nome}</td>
              <td className="py-4 border-b">{aluno.email}</td>
              <td className="py-4 border-b">{aluno.curso}</td>
              <td className="py-4 border-b">{aluno.turno}</td>
              <td className="py-4 border-b">{aluno.sexo}</td>
              <td className="py-4   border-b gap-4 ">
                <div className="gap-2 justify-center flex">
                  <ModalEditar titlebotao="Editar" aluno={aluno} /> 
                  <DeleteButton  id={aluno.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
       </table>
      </div>
    </div>
  );
}
 