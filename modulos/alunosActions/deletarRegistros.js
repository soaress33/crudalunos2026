"user server";

import { prisma } from "@/lib/prisma";

export async function deletarRegistros(id) {

console.log(
    "\x1b[36m%s\x1b[om",
    `Deletando aluno ID: ${id}`
);

console.log(
    "\x1b[33m%s\x1b[0m",
    `${new Date().toLocaleString()}`
);

const alunoDeletado = await prisma.aluno.delete({
    where: {
        id,
    },
});
if (alunoDeletado){
    console.log(
        "\x1b[32m%s\x1b[0m",
        `Aluno deletado com sucesso!`
    );
} else {
    console.log(
        "\x1b[31m%s\x1b[0m",
        `Erro ao deletar aluno!`
    );
}

return alunoDeletado;

}