"use client";
import { cadastrar_Aluno } from "@/modulos/alunos/controler/alunosActions";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import BtnCadastrar from "@/components/btnCadastrar";
import { GravarRegistro } from "@/modulos/alunosActions/gravarRegistros";
import Swal from "sweetalert2";

export default function AlunoForm() {
  const router = useRouter();
  const formRef = useRef(null);

  async function handleAction(formData) {
    console.log("CLICOU NO BOTÃO ");

    const res = await GravarRegistro(formData);
    console.log("Resposta do cadastro:", res);

    if (res.success) {
      router.refresh();
   
 Swal.fire({
      title: "Erro ao cadastrar!",
      icon: "error",
      draggable: false
    });
    } else {
         Swal.fire({
        title: "Aluno cadastrado com sucesso!",
        icon: "success",
        draggable: true
      });
      setOpen(true);
  


      
    }


  }

  return (
    <form ref={formRef} action={handleAction}>
      <div className="font-sans bg-gray-400 flex flex-col  items-center justify-items-center   ">
        
        <div className="bg-white w-full  mt-4 flex flex-col p-5 py-6  rounded-3xl">
          <div className="ml-6 ">
            <h1 className="text-3xl text-black">Cadastro de Alunos</h1>
            <p className="text-gray-400">
              Preencha os dados abaixo para cadastrar um novo aluno.
            </p>
          </div>
          <div className=" px-5 flex gap-10 mt-5  ">
            <div className="w-full flex flex-col ">
              <h1 className="text-black ">Nome Completo</h1>
              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Ex: João da Silva"
                className="border rounded p-2 text-gray-400 h-12 w-full"
              ></input>
            </div>

            <div className="w-full ">
              <h1 className="text-black ">Email</h1>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="exemplo@gmail.com"
                className="border  rounded p-2 text-gray-400 h-12 w-full"
              ></input>
            </div>
          </div>

          <div className=" px-5 gap-10 flex mt-5  ">
            <div className="w-full ">
              <h1 className="text-black ">Matrícula</h1>
              <input
                id="matricula"
                name="matricula"
                type="text"
                placeholder="Ex: 1103248"
                className="border rounded p-2 text-gray-400 h-12 w-full"
              ></input>
            </div>
            <div className="w-full ">
              <h1 className="text-black ">Curso</h1>
              <input
                id="curso"
                name="curso"
                type="text"
                placeholder="Ex: ADS"
                className="border outline-none rounded p-2 text-gray-400 h-12 w-full"
              ></input>
            </div>
          </div>




          {/**Divi dos Selct */}
          <div className=" flex px-4 py-4 items-center gap-10 text-black">

            <div className="">
              <h1>Sexo</h1>
              <select
                id="sexo"
                name="sexo"
                className="border w-50 h-10 border-gray-300 rounded-lg focus:ring-blue-500"
                required
              >
                <option value="">Selecione</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div className="">
              <h1>Turno</h1>
              <select
                id="turno"
                name="turno"
                className="border w-50 h-10  border-gray-300 rounded-lg focus:ring-blue-500"
                required
              >
                <option value="">Selecione</option>
                <option value="Manhã">Manhã</option>
                <option value="Tarde">Tarde</option>
                <option value="Noite">Noite </option>
              </select>
            </div>

            <h1>Data de Nascimento: </h1>
            <input
              id="nascimento"
              name="nascimento"
              type="date"
              className="ml-15 outline-none border-gray-500  border justify-center flex rounded w-40 h-13"
            ></input>
          </div>
          
          <div className=" flex justify-end mt-5 px-5">
            <BtnCadastrar />
          </div>

        </div>
      </div>
    </form>
  );
}
