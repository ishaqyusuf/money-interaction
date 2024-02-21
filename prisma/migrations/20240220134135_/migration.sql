/*
  Warnings:

  - You are about to drop the column `interactionId` on the `Interactions` table. All the data in the column will be lost.
  - Added the required column `bookFormInteractionId` to the `Interactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bookInteractionId` to the `Interactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Interactions` DROP COLUMN `interactionId`,
    ADD COLUMN `bookFormInteractionId` INTEGER NOT NULL,
    ADD COLUMN `bookInteractionId` INTEGER NOT NULL;
