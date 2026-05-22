"use server";

export async function atualizarRegistro(id, data){

    try {
        constId = Number(id);
        console.log(
            "\x1b[36m%s\x1b[0m"
            `Atualizando aluno ID: ${alunoId}`
        );

        const alunoAtualizado = await prisma.aluno.update({
            where: {
                id: alunoId,
            },
            data,
        });

        console.log(
            "\x1b[32m%s\x1b[0m",
            `Aluno atualizado com sucessso!`
        );

        return {
            sucess: true,
            message: "Aluno atualizado com sucesso!",
            registro: alunoAtualizado,
        };

    }catch (error) {
        console.log(error);

        console.log(
            "\x1b[31m%s\x1b[0m",
            `Erro ao atualizar aluno ID: ${id}`
        );
        return{
            sucess: false, 
            error: "Não foi possivel atualizar o aluno.",
        };
    }
}