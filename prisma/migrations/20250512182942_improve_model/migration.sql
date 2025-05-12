/*
  Warnings:

  - You are about to drop the `Ranking` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Review` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Ranking";

-- DropTable
DROP TABLE "Review";

-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "username" TEXT,
    "comment" TEXT,
    "time" DOUBLE PRECISION NOT NULL,
    "dateAdded" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);
