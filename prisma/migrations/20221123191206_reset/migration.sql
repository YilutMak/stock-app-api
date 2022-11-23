/*
  Warnings:

  - You are about to drop the `Stocks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Stocks" DROP CONSTRAINT "Stocks_userId_fkey";

-- DropTable
DROP TABLE "Stocks";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "asdsad" (
    "id" SERIAL NOT NULL,
    "ddsad" TEXT NOT NULL,
    "usasdsder" TEXT NOT NULL,
    "useasdasdasdrId" INTEGER,

    CONSTRAINT "asdsad_pkey" PRIMARY KEY ("id")
);
