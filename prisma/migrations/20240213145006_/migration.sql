/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `BookCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `BookCategory_title_key` ON `BookCategory`(`title`);
