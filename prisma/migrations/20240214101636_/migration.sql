/*
  Warnings:

  - You are about to drop the column `interactionBooksId` on the `InteractionBookCategory` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `InteractionBookCategory` DROP FOREIGN KEY `InteractionBookCategory_interactionBooksId_fkey`;

-- AlterTable
ALTER TABLE `InteractionBookCategory` DROP COLUMN `interactionBooksId`,
    ADD COLUMN `bookId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `InteractionBookCategory` ADD CONSTRAINT `InteractionBookCategory_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `InteractionBooks`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
