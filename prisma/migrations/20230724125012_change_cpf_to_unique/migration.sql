/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `Customers` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- CreateIndex
ALTER TABLE [dbo].[Customers] ADD CONSTRAINT [Customers_cpf_key] UNIQUE NONCLUSTERED ([cpf]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
