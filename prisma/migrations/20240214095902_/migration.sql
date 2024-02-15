/*
  Warnings:

  - Made the column `interactionBooksId` on table `InteractionBookForms` required. This step will fail if there are existing NULL values in that column.
  - Made the column `interactionFormsId` on table `InteractionBookForms` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `InteractionBookForms` DROP FOREIGN KEY `InteractionBookForms_interactionBooksId_fkey`;

-- DropForeignKey
ALTER TABLE `InteractionBookForms` DROP FOREIGN KEY `InteractionBookForms_interactionFormsId_fkey`;

-- AlterTable
ALTER TABLE `InteractionBookForms` MODIFY `interactionBooksId` INTEGER NOT NULL,
    MODIFY `interactionFormsId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `InteractionBookForms` ADD CONSTRAINT `InteractionBookForms_interactionBooksId_fkey` FOREIGN KEY (`interactionBooksId`) REFERENCES `InteractionBooks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InteractionBookForms` ADD CONSTRAINT `InteractionBookForms_interactionFormsId_fkey` FOREIGN KEY (`interactionFormsId`) REFERENCES `InteractionFormSchemas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
