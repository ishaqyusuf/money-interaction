/*
  Warnings:

  - You are about to drop the column `interactionFormsId` on the `InteractionFormFields` table. All the data in the column will be lost.
  - You are about to drop the column `formId` on the `Interactions` table. All the data in the column will be lost.
  - Added the required column `formSchemaId` to the `InteractionFormFields` table without a default value. This is not possible if the table is not empty.
  - Added the required column `formSchemaId` to the `Interactions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `InteractionFormFields` DROP FOREIGN KEY `InteractionFormFields_interactionFormsId_fkey`;

-- DropForeignKey
ALTER TABLE `Interactions` DROP FOREIGN KEY `Interactions_formId_fkey`;

-- AlterTable
ALTER TABLE `InteractionFormFields` DROP COLUMN `interactionFormsId`,
    ADD COLUMN `formSchemaId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Interactions` DROP COLUMN `formId`,
    ADD COLUMN `formSchemaId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `InteractionFormFields` ADD CONSTRAINT `InteractionFormFields_formSchemaId_fkey` FOREIGN KEY (`formSchemaId`) REFERENCES `InteractionFormSchemas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Interactions` ADD CONSTRAINT `Interactions_formSchemaId_fkey` FOREIGN KEY (`formSchemaId`) REFERENCES `InteractionFormSchemas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
