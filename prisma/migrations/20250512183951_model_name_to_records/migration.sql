/*
  Warnings:

  - You are about to drop the `Player` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Player";

-- CreateTable
CREATE TABLE "Records" (
    "id" SERIAL NOT NULL,
    "username" TEXT,
    "comment" TEXT,
    "time" DOUBLE PRECISION NOT NULL,
    "dateAdded" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Records_pkey" PRIMARY KEY ("id")
);
