/*
  Warnings:

  - You are about to drop the `InteractionForms` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `InteractionBookForms` DROP FOREIGN KEY `InteractionBookForms_interactionFormsId_fkey`;

-- DropForeignKey
ALTER TABLE `InteractionFormCategory` DROP FOREIGN KEY `InteractionFormCategory_interactionFormId_fkey`;

-- DropForeignKey
ALTER TABLE `InteractionFormFields` DROP FOREIGN KEY `InteractionFormFields_interactionFormsId_fkey`;

-- DropForeignKey
ALTER TABLE `Interactions` DROP FOREIGN KEY `Interactions_formId_fkey`;

-- DropTable
DROP TABLE `InteractionForms`;

-- CreateTable
CREATE TABLE `InteractionFormSchemas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` LONGTEXT NULL,
    `valueFormat` VARCHAR(191) NULL,
    `publishedAt` TIMESTAMP(0) NULL,
    `createdAt` TIMESTAMP(0) NULL,
    `updatedAt` TIMESTAMP(0) NULL,
    `deletedAt` TIMESTAMP(0) NULL,

    UNIQUE INDEX `InteractionFormSchemas_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `InteractionBookForms` ADD CONSTRAINT `InteractionBookForms_interactionFormsId_fkey` FOREIGN KEY (`interactionFormsId`) REFERENCES `InteractionFormSchemas`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InteractionFormCategory` ADD CONSTRAINT `InteractionFormCategory_interactionFormId_fkey` FOREIGN KEY (`interactionFormId`) REFERENCES `InteractionFormSchemas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InteractionFormFields` ADD CONSTRAINT `InteractionFormFields_interactionFormsId_fkey` FOREIGN KEY (`interactionFormsId`) REFERENCES `InteractionFormSchemas`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Interactions` ADD CONSTRAINT `Interactions_formId_fkey` FOREIGN KEY (`formId`) REFERENCES `InteractionFormSchemas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
