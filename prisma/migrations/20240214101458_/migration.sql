/*
  Warnings:

  - You are about to drop the column `interactionBooksId` on the `InteractionBookForms` table. All the data in the column will be lost.
  - Added the required column `bookId` to the `InteractionBookForms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `meta` to the `InteractionFormSchemas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `InteractionBookForms` DROP FOREIGN KEY `InteractionBookForms_interactionBooksId_fkey`;

-- AlterTable
ALTER TABLE `InteractionBookForms` DROP COLUMN `interactionBooksId`,
    ADD COLUMN `bookId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `InteractionFormSchemas` ADD COLUMN `meta` JSON NOT NULL;

-- CreateTable
CREATE TABLE `SchemaRelations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `schemaId` INTEGER NOT NULL,
    `relatedId` INTEGER NOT NULL,
    `createdAt` TIMESTAMP(0) NULL,
    `updatedAt` TIMESTAMP(0) NULL,
    `deletedAt` TIMESTAMP(0) NULL,

    UNIQUE INDEX `SchemaRelations_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `InteractionBookForms` ADD CONSTRAINT `InteractionBookForms_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `InteractionBooks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
