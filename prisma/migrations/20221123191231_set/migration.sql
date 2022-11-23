/*
  Warnings:

  - You are about to drop the `asdsad` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "asdsad";

-- CreateTable
CREATE TABLE "Stocks" (
    "id" SERIAL NOT NULL,
    "symbol" TEXT NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Stocks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "avatar" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Stocks_userId_symbol_key" ON "Stocks"("userId", "symbol");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Stocks" ADD CONSTRAINT "Stocks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
