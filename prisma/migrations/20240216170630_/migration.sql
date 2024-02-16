-- CreateTable
CREATE TABLE `InteractionBookAccess` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bookId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `createForm` BOOLEAN NULL DEFAULT false,

    UNIQUE INDEX `InteractionBookAccess_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InteractionFormPermission` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bookAccessId` INTEGER NOT NULL,
    `bookFormId` INTEGER NOT NULL,
    `createInteraction` BOOLEAN NULL DEFAULT false,
    `editForm` BOOLEAN NULL DEFAULT false,
    `deleteForm` BOOLEAN NULL DEFAULT false,

    UNIQUE INDEX `InteractionFormPermission_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `InteractionBookAccess` ADD CONSTRAINT `InteractionBookAccess_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `InteractionBooks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InteractionBookAccess` ADD CONSTRAINT `InteractionBookAccess_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InteractionFormPermission` ADD CONSTRAINT `InteractionFormPermission_bookAccessId_fkey` FOREIGN KEY (`bookAccessId`) REFERENCES `InteractionBookAccess`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InteractionFormPermission` ADD CONSTRAINT `InteractionFormPermission_bookFormId_fkey` FOREIGN KEY (`bookFormId`) REFERENCES `InteractionBookForms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
