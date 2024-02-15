/*
  Warnings:

  - You are about to drop the column `formSchemaId` on the `Interactions` table. All the data in the column will be lost.
  - Added the required column `bookFormId` to the `Interactions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Interactions` DROP FOREIGN KEY `Interactions_formSchemaId_fkey`;

-- AlterTable
ALTER TABLE `Interactions` DROP COLUMN `formSchemaId`,
    ADD COLUMN `bookFormId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Interactions` ADD CONSTRAINT `Interactions_bookFormId_fkey` FOREIGN KEY (`bookFormId`) REFERENCES `InteractionBookForms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
