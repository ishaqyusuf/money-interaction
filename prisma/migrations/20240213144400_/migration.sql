/*
  Warnings:

  - You are about to drop the column `formCategoryId` on the `InteractionBookCategory` table. All the data in the column will be lost.
  - You are about to drop the column `interactionFormId` on the `InteractionBookCategory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `InteractionBookCategory` DROP COLUMN `formCategoryId`,
    DROP COLUMN `interactionFormId`;
