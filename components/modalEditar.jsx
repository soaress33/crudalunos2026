'use client';

import { atualizaAluno } from "@/modulos/alunos/repository/alunoRepository";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";

export default function ModalEditar({ aluno }){

    const [open, setOpen] = useState(false);

    function handleOpen(){
        setOpen(false);
    }

    const router = useRouter();

    async function handleEditar(e) {
        try {
            const formData = new FormData(e.target);
            //impede reload da pagina
            e.preventDefault();
            //add sexo ao formData para enviar para a Server Action
            if (formData.get ('sexo')) {
                formData.set('sexo', formData.get('sexo').toUpperCase());
            } else {

                formData.set('sexo', aluno.sexo);

            }
            
            const res = await atualizarRegistro(aluno.id, formData);

            if (res.sucess) {
                router.refresh();
                toast.sucess(res.message);
                setOpen(false);

            }else {
                toast.error(res.error);
            }
    }catch (error) {
        console.log('Erro ao editar aluno:', error);
        toast.error('Erro interno ao editar aluno');
    }

} 


return (
    <>
        <button
            onClick={() => setOpen(true)}
            className="bg-blue-600 text-white px-4 py-3 rounded-lg"
        >
            Editar Registro
        </button>

        {open && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-2xl w-full max-w-2xl relative">
                    
                    <button
                        onClick={handleClose}
                        className="absolute right-3 top-3"
                    >
                        x
                    </button>

                    {/* Cabeçalho */}
                    <div className="border-b m-0 p-0">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Editar
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                            Faça as alterações necessárias.
                        </p>
                    </div>

                    <form
                        onSubmit={handleEditar}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 border-none my-2 p-0"
                    >
                        {/* Nome */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-gray-600">
                                Nome Completo
                            </label>
                            <input
                                name="nome"
                                defaultValue={aluno.nome}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                defaultValue={aluno.email}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Matrícula */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-gray-600">
                                Matrícula
                            </label>
                            <input
                                name="matricula"
                                defaultValue={aluno.matricula}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Data da matrícula */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-gray-600">
                                Data da Matrícula
                            </label>
                            <input
                                type="text"
                                name="dataMatricula"
                                defaultValue={converterDataEUAtoBR(aluno.dataMatricula)}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Turno */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-gray-600">
                                Turno
                            </label>
                            <div className="flex gap-4 flex-wrap">
                                <label className="flex items-center gap-2 text-sm">
                                    <input
                                        type="radio"
                                        name="turno"
                                        value="Manhã"
                                        defaultChecked={aluno.turno === 'Manhã'}
                                    />
                                    Manhã
                                </label>

                                <label className="flex items-center gap-2 text-sm">
                                    <input
                                        type="radio"
                                        name="turno"
                                        value="Tarde"
                                        defaultChecked={aluno.turno === 'Tarde'}
                                    />
                                    Tarde
                                </label>

                                <label className="flex items-center gap-2 text-sm">
                                    <input
                                        type="radio"
                                        name="turno"
                                        value="Noite"
                                        defaultChecked={aluno.turno === 'Noite'}
                                    />
                                    Noite
                                </label>
                            </div>
                        </div>

                        {/* Curso */}
                        <div className="flex flex-col gap-1 md:col-span-2">
                            <label className="text-sm text-gray-600">
                                Curso
                            </label>
                            <select
                                name="curso"
                                defaultValue={aluno.curso || ''}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="">Selecione um curso</option>
                                <option value="ADS">ADS - Análise e Desenvolvimento de Sistemas</option>
                                <option value="ADM">ADM - Administração</option>
                                <option value="ENF">ENF - Enfermagem</option>
                                <option value="TST">TST - Técnico em Segurança do Trabalho</option>
                                <option value="RH">RH - Recursos Humanos</option>
                            </select>
                        </div>

                        {/* Botões */}
                        <div className="md:col-span-2 flex flex-col md:flex-row gap-4 justify-center pt-4">
                            <button
                                type="submit"
                                className="px-3 py-3 rounded-md bg-blue-800 hover:opacity-70 w-[80%] text-white text-md font-medium transition"
                            >
                                Salvar Alterações
                            </button>
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="px-3 py-3 rounded-md bg-red-800 hover:opacity-70 w-[78%] text-white text-md font-medium transition"
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )}
    </>
 );
}
