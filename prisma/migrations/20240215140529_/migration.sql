-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Users_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InteractionBooks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `InteractionBooks_id_key`(`id`),
    UNIQUE INDEX `InteractionBooks_slug_key`(`slug`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InteractionBookCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bookCategoryId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `bookId` INTEGER NULL,

    UNIQUE INDEX `InteractionBookCategory_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BookCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `BookCategory_id_key`(`id`),
    UNIQUE INDEX `BookCategory_title_key`(`title`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InteractionBookForms` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `formSchemaId` INTEGER NOT NULL,
    `bookId` INTEGER NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `InteractionBookForms_id_key`(`id`),
    INDEX `InteractionBookForms_bookId_idx`(`bookId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SchemaRelations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `schemaId` INTEGER NOT NULL,
    `relatedId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `SchemaRelations_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InteractionFormSchemas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` LONGTEXT NULL,
    `valueFormat` VARCHAR(191) NULL,
    `meta` JSON NOT NULL,
    `publishedAt` TIMESTAMP(0) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `InteractionFormSchemas_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InteractionFormSchemaDisplayLayouts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `formSchemaId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `InteractionFormSchemaDisplayLayouts_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InteractionFormCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `formSchemaId` INTEGER NOT NULL,
    `formCategoryId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `InteractionFormCategory_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FormCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `FormCategory_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InteractionFormFields` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `dataType` VARCHAR(191) NOT NULL,
    `autoCompleteFromFieldId` INTEGER NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `formSchemaId` INTEGER NOT NULL,

    UNIQUE INDEX `InteractionFormFields_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InteractionFormValue` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `value` VARCHAR(191) NOT NULL,
    `meta` JSON NOT NULL,
    `interactionsId` INTEGER NULL,
    `fieldId` INTEGER NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `InteractionFormValue_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SumFieldValues` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    UNIQUE INDEX `SumFieldValues_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Interactions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bookId` INTEGER NOT NULL,
    `bookFormId` INTEGER NOT NULL,
    `details` VARCHAR(191) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Interactions_id_key`(`id`),
    INDEX `Interactions_bookId_idx`(`bookId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `InteractionBooks` ADD CONSTRAINT `InteractionBooks_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InteractionBookCategory` ADD CONSTRAINT `InteractionBookCategory_bookCategoryId_fkey` FOREIGN KEY (`bookCategoryId`) REFERENCES `BookCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InteractionBookCategory` ADD CONSTRAINT `InteractionBookCategory_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `InteractionBooks`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InteractionBookForms` ADD CONSTRAINT `InteractionBookForms_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `InteractionBooks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InteractionBookForms` ADD CONSTRAINT `InteractionBookForms_formSchemaId_fkey` FOREIGN KEY (`formSchemaId`) REFERENCES `InteractionFormSchemas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InteractionFormSchemaDisplayLayouts` ADD CONSTRAINT `InteractionFormSchemaDisplayLayouts_formSchemaId_fkey` FOREIGN KEY (`formSchemaId`) REFERENCES `InteractionFormSchemas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InteractionFormCategory` ADD CONSTRAINT `InteractionFormCategory_formCategoryId_fkey` FOREIGN KEY (`formCategoryId`) REFERENCES `FormCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InteractionFormCategory` ADD CONSTRAINT `InteractionFormCategory_formSchemaId_fkey` FOREIGN KEY (`formSchemaId`) REFERENCES `InteractionFormSchemas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InteractionFormFields` ADD CONSTRAINT `InteractionFormFields_formSchemaId_fkey` FOREIGN KEY (`formSchemaId`) REFERENCES `InteractionFormSchemas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InteractionFormValue` ADD CONSTRAINT `InteractionFormValue_interactionsId_fkey` FOREIGN KEY (`interactionsId`) REFERENCES `Interactions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InteractionFormValue` ADD CONSTRAINT `InteractionFormValue_fieldId_fkey` FOREIGN KEY (`fieldId`) REFERENCES `InteractionFormFields`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Interactions` ADD CONSTRAINT `Interactions_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `InteractionBooks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Interactions` ADD CONSTRAINT `Interactions_bookFormId_fkey` FOREIGN KEY (`bookFormId`) REFERENCES `InteractionBookForms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
