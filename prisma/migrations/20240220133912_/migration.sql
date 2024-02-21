/*
  Warnings:

  - Added the required column `interactionId` to the `Interactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Interactions` ADD COLUMN `interactionId` INTEGER NOT NULL;
