/*
  Warnings:

  - You are about to drop the column `symbole` on the `Stocks` table. All the data in the column will be lost.
  - Added the required column `symbol` to the `Stocks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Stocks" DROP COLUMN "symbole",
ADD COLUMN     "symbol" TEXT NOT NULL;
