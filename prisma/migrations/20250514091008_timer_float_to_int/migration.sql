/*
  Warnings:

  - You are about to alter the column `time` on the `Records` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Records" ALTER COLUMN "time" SET DATA TYPE INTEGER;
