/*
  Warnings:

  - You are about to drop the column `stocks` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "stocks";

-- CreateTable
CREATE TABLE "Stocks" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Stocks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Stocks" ADD CONSTRAINT "Stocks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
