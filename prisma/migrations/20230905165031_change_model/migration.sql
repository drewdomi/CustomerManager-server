/*
  Warnings:

  - You are about to drop the column `isDeleted` on the `Customers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Customers" DROP COLUMN "isDeleted",
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(60);
