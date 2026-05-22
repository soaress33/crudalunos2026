'use server'; 
import { prisma } from "@/lib/prisma";

import {
  apaga_Aluno,
  gravarAluno,
  pegar_Alunos,  
  atualizaAlunoService 
 } from "../services/alunoService";

export async function get_Alunos() {
  const dados = await pegar_Alunos();

return dados;
}


export async function cadastrar_Aluno(formData) {

    const nome = formData.get('nome')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const matricula = formData.get('matricula')?.toString().trim();
    const curso = formData.get('curso')?.toString().trim();
    const nascimento = formData.get('nascimento')?.toString();
    
    console.log('Dados recebidos:', { nome, email, matricula, curso, nascimento });

    try {
        const res = await gravarAluno(nome, email, matricula, curso, nascimento);
        console.log('Aluno cadastrado com sucesso:', res);
        return { success: true, message: "Aluno cadastrado com sucesso." };
    } catch (error) {
        console.error('Erro ao cadastrar aluno:', error);
        return { success: false, error: error?.message || "Erro ao cadastrar o aluno." };
    }
}
export async function deletar_Aluno(id) {
  try {
    await apaga_Aluno(id);
    return { success: true, message: "Aluno deletado com sucesso." };
  } catch (error) {
    return { success: false, error: error?.message || "Erro ao deletar o aluno." };
  }
}
export async function findAlunoById(id) {
  console.log('Buscando aluno ID:', id);
  const Aluno = await prisma.aluno.findUnique({
    where: { id },
  });
  console.log('Aluno encontrado:', Aluno);
  return Aluno;
}
export async function atualizaAlunoAction(id, formData) {
  const nome = formData.get('nome')?.toString().trim();
  const curso = formData.get('curso')?.toString().trim();
  console.log("passei em Controller...", id)
  try{
    const alunoAtualizado = await atualizaAlunoService(id, { nome, curso });
    return { success: true, message: "Aluno atualizado com sucesso.", aluno: alunoAtualizado };
  } catch (err) {
    return { success: false, error: err?.message || "Erro ao atualizar o aluno." };
  }
  }