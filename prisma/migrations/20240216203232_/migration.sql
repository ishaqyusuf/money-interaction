-- CreateIndex
CREATE INDEX `InteractionBookAccess_createdAt_deletedAt_userId_bookId_idx` ON `InteractionBookAccess`(`createdAt`, `deletedAt`, `userId`, `bookId`);

-- CreateIndex
CREATE INDEX `InteractionBooks_createdAt_deletedAt_userId_slug_idx` ON `InteractionBooks`(`createdAt`, `deletedAt`, `userId`, `slug`);
