"use server";
// repository/repositoryAluno.js
// Importa o cliente do Prisma (responsável por conversar com o banco)
import { prisma } from "@/lib/prisma";
 
/**
 * Buscar todos os alunos
 *
 * - Retorna uma lista com todos os alunos do banco
 * - Ordena do mais recente para o mais antigo (criadoEm DESC)
 * - Usado normalmente para listagem em tabelas
 */
export async function get_AllAlunos() {
  const result = await prisma.aluno.findMany({
    orderBy: { nome: "desc" },
  });
  return result;
}
 

export async function post_Aluno(data) {
  const { nome, email, matricula, curso, nascimento } = data;
 
  const result = await prisma.aluno.create({
    data: {
      nome,
      email,
      matricula,
      curso,
      nascimento,
    },
  });
 
  return result;
}
 
/**
 * Deletar aluno
 *
 * - Remove o aluno do banco pelo ID
 * - Cuidado: operação irreversível
 */
export async function del_Aluno(id) {
  const result = await prisma.aluno.delete({
    where: { id },
  });
 
  return result;
}



export async function findAlunoById(id) {
    const aluno = await prisma.aluno.findUnique({
        where: { id }
    });
    return aluno;
}
export async function atualizaAluno(id, data) {
    console.log("Passei em Repository")
    console.log('Atualizando aluno ID:', id, 'com dados:', data);
    const aluno_atualizado = await prisma.aluno.update({
        where: { id },
        data
    });
    console.log('Aluno atualizado:', aluno_atualizado);
    return aluno_atualizado;
}
 