/*
  Warnings:

  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,symbol]` on the table `Stocks` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[usernamegit]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `usernamegit` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "username",
ADD COLUMN     "usernamegit" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Stocks_userId_symbol_key" ON "Stocks"("userId", "symbol");

-- CreateIndex
CREATE UNIQUE INDEX "User_usernamegit_key" ON "User"("usernamegit");
