/*
  Warnings:

  - You are about to drop the column `correct` on the `ranking` table. All the data in the column will be lost.
  - Added the required column `score` to the `Ranking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ranking` DROP COLUMN `correct`,
    ADD COLUMN `score` INTEGER NOT NULL,
    MODIFY `time` INTEGER NULL;
