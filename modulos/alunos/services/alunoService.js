"use server";

import { 
    del_Aluno,
    get_AllAlunos,
    post_Aluno,
    atualizaAluno,
    findAlunoById
    
} from '../repository/alunoRepository';




export async function pegar_Alunos() {
    const result = await get_AllAlunos();
    return result;
}
export async function gravarAluno(
    nome,
    email,
    matricula,
    curso,
    nascimento
) {
   
  if (!nome || !email || !matricula || !curso || !nascimento ) {
    throw new Error('Todos os campos são obrigatórios');
  }
 
return await post_Aluno({
    nome,
    email,  
    matricula,
    curso,
    nascimento
});
}
 export async function apaga_Aluno (id) {
    return await del_Aluno(Number(id));
}

export async function atualizaAlunoService(id, data) {
    console.log("passei em Services")
    const existe = await findAlunoById(Number(id));
    if (!existe) {
        throw new Error('Aluno não encontrado');
    } else {
        console.log('Atualizando aluno:', id, existe);
    }
        const alunoAtualizado = await atualizaAluno(Number(id), data);
        return alunoAtualizado;
    }