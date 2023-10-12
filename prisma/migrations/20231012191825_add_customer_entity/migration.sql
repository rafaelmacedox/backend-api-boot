-- CreateEnum
CREATE TYPE "CustomerStatus" AS ENUM ('PENDENTE', 'ATIVO', 'INATIVO', 'BLOQUEADO');

-- CreateEnum
CREATE TYPE "CustomerRoles" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "status" "CustomerStatus" NOT NULL DEFAULT 'PENDENTE',
    "roles" "CustomerRoles" NOT NULL DEFAULT 'USER',

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");
