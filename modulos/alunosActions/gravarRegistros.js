"use server";

import { prisma } from "../../lib/prisma.js";

/**
 * Criar novo aluno
 *
 * - Recebe os dados do formulário
 * - Limpa os campos
 * - Grava no banco usando Prisma
 */
export async function GravarRegistro(formData) {

  // Extração e limpeza dos dados
  const nome = formData.get("nome")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const matricula = formData.get("matricula")?.toString().trim();
  const curso = formData.get("curso")?.toString().trim();
  const turno = formData.get("turno")?.toString().trim();
  const sexo = formData.get("sexo")?.toString().trim();

  // Objeto com os dados
  const dados = {
    nome,
    email,
    matricula,
    curso,
    turno,
    sexo,
  };

  // Debug colorido no terminal
  console.log(
    "\x1b[34m%s\x1b[0m",
    ` Server Action gravando registro... ${new Date().toLocaleString()}`
  );

  // Grava no banco
  return await prisma.aluno.create({
    data: dados,
  });
}