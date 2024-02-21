/*
  Warnings:

  - You are about to drop the column `valueFormat` on the `InteractionFormSchemas` table. All the data in the column will be lost.
  - Made the column `interactionsId` on table `InteractionFormValue` required. This step will fail if there are existing NULL values in that column.
  - Made the column `fieldId` on table `InteractionFormValue` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `InteractionFormValue` DROP FOREIGN KEY `InteractionFormValue_fieldId_fkey`;

-- DropForeignKey
ALTER TABLE `InteractionFormValue` DROP FOREIGN KEY `InteractionFormValue_interactionsId_fkey`;

-- AlterTable
ALTER TABLE `InteractionFormSchemas` DROP COLUMN `valueFormat`,
    ADD COLUMN `type` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `InteractionFormValue` MODIFY `interactionsId` INTEGER NOT NULL,
    MODIFY `fieldId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `InteractionFormValue` ADD CONSTRAINT `InteractionFormValue_interactionsId_fkey` FOREIGN KEY (`interactionsId`) REFERENCES `Interactions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InteractionFormValue` ADD CONSTRAINT `InteractionFormValue_fieldId_fkey` FOREIGN KEY (`fieldId`) REFERENCES `InteractionFormFields`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
