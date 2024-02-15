/*
  Warnings:

  - Made the column `bookId` on table `InteractionBookCategory` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `InteractionBookCategory` DROP FOREIGN KEY `InteractionBookCategory_bookId_fkey`;

-- AlterTable
ALTER TABLE `InteractionBookCategory` MODIFY `bookId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `InteractionBookCategory` ADD CONSTRAINT `InteractionBookCategory_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `InteractionBooks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
 
