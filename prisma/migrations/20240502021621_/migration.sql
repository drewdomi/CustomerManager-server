/*
  Warnings:

  - You are about to alter the column `password` on the `Customers` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(60)`.

*/
-- AlterTable
ALTER TABLE "Customers" ALTER COLUMN "password" SET DATA TYPE VARCHAR(60);
