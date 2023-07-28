-- CreateTable
CREATE TABLE "Customers" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "email" VARCHAR(60) NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "birthday" VARCHAR(10) NOT NULL,
    "isDeleted" VARCHAR(1),

    CONSTRAINT "Customers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customers_cpf_key" ON "Customers"("cpf");
