/*
  Warnings:

  - You are about to drop the column `nascimento` on the `Aluno` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Aluno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "turno" TEXT,
    "sexo" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Aluno" ("ativo", "criadoEm", "curso", "email", "id", "matricula", "nome") SELECT "ativo", "criadoEm", "curso", "email", "id", "matricula", "nome" FROM "Aluno";
DROP TABLE "Aluno";
ALTER TABLE "new_Aluno" RENAME TO "Aluno";
CREATE UNIQUE INDEX "Aluno_email_key" ON "Aluno"("email");
CREATE UNIQUE INDEX "Aluno_matricula_key" ON "Aluno"("matricula");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
