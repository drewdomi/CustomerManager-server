/*
  Warnings:

  - You are about to drop the column `birthday` on the `Customers` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Customers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `birthDate` to the `Customers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customers" DROP COLUMN "birthday",
ADD COLUMN     "birthDate" VARCHAR(10) NOT NULL,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(255);

-- CreateIndex
CREATE UNIQUE INDEX "Customers_email_key" ON "Customers"("email");
