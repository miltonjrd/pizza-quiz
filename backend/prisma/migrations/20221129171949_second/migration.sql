/*
  Warnings:

  - Added the required column `correct` to the `Alternative` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `alternative` ADD COLUMN `correct` BOOLEAN NOT NULL;
