/*
  Warnings:

  - You are about to drop the `SumFieldValues` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `InteractionFormFields` ADD COLUMN `currency` BOOLEAN NULL DEFAULT false,
    ADD COLUMN `format` VARCHAR(191) NULL,
    ADD COLUMN `primaryField` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `unit` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `SumFieldValues`;

-- CreateTable
CREATE TABLE `InteractionAnalytics` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `value` DOUBLE NOT NULL,
    `bookId` INTEGER NOT NULL,
    `fieldId` INTEGER NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `InteractionAnalytics_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `InteractionAnalytics` ADD CONSTRAINT `InteractionAnalytics_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `InteractionBooks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InteractionAnalytics` ADD CONSTRAINT `InteractionAnalytics_fieldId_fkey` FOREIGN KEY (`fieldId`) REFERENCES `InteractionFormFields`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
