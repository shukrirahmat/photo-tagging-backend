/*
  Warnings:

  - You are about to drop the `HiddenObject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "HiddenObject";

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "xstart" INTEGER NOT NULL,
    "xend" INTEGER NOT NULL,
    "ystart" INTEGER NOT NULL,
    "yend" INTEGER NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);
