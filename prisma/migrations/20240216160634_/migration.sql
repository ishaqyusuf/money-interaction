/*
  Warnings:

  - Added the required column `meta` to the `InteractionFormFields` table without a default value. This is not possible if the table is not empty.
  - Added the required column `interactionId` to the `Interactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `InteractionFormFields` ADD COLUMN `meta` JSON NOT NULL;

-- AlterTable
ALTER TABLE `Interactions` ADD COLUMN `interactionId` INTEGER NOT NULL;
