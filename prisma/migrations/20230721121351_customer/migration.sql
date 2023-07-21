BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Customers] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(30) NOT NULL,
    [email] VARCHAR(60) NOT NULL,
    [cpf] VARCHAR(11) NOT NULL,
    [birthday] DATE NOT NULL,
    CONSTRAINT [Customers_pkey] PRIMARY KEY CLUSTERED ([id])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH