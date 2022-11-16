/*
  Warnings:

  - Added the required column `symbole` to the `Stocks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Stocks" ADD COLUMN     "symbole" TEXT NOT NULL;
