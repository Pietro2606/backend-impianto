-- CreateTable
CREATE TABLE "eventoImpianto" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "valore" TEXT NOT NULL,
    "orario" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "impiantoId" INTEGER NOT NULL,
    "utenteId" INTEGER,

    CONSTRAINT "eventoImpianto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "impianto" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "impianto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "utente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "utente_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "eventoImpianto" ADD CONSTRAINT "eventoImpianto_impiantoId_fkey" FOREIGN KEY ("impiantoId") REFERENCES "impianto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eventoImpianto" ADD CONSTRAINT "eventoImpianto_utenteId_fkey" FOREIGN KEY ("utenteId") REFERENCES "utente"("id") ON DELETE SET NULL ON UPDATE CASCADE;
