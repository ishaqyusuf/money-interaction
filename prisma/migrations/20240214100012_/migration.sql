/*
  Warnings:

  - You are about to drop the column `interactionFormsId` on the `InteractionBookForms` table. All the data in the column will be lost.
  - Added the required column `formSchemaId` to the `InteractionBookForms` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `InteractionBookForms` DROP FOREIGN KEY `InteractionBookForms_interactionFormsId_fkey`;

-- AlterTable
ALTER TABLE `InteractionBookForms` DROP COLUMN `interactionFormsId`,
    ADD COLUMN `formSchemaId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `InteractionBookForms` ADD CONSTRAINT `InteractionBookForms_formSchemaId_fkey` FOREIGN KEY (`formSchemaId`) REFERENCES `InteractionFormSchemas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
