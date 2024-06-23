-- CreateEnum
CREATE TYPE "civilState" AS ENUM ('SOLTEIRO', 'CASADO', 'SEPARADO', 'DIVORCIADO', 'VIUVO');

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "motherName" VARCHAR(255) NOT NULL,
    "rg" VARCHAR(9) NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "birthDate" VARCHAR(10) NOT NULL,
    "civilState" "civilState" NOT NULL,
    "plan" VARCHAR(10) NOT NULL,
    "admissionDate" VARCHAR(10) NOT NULL,
    "validityDate" VARCHAR(10) NOT NULL,
    "registration" VARCHAR(8) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(8) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_rg_key" ON "Employee"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_cpf_key" ON "Employee"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_registration_key" ON "Employee"("registration");
