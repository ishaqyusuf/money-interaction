/*
  Warnings:

  - Made the column `updatedAt` on table `InteractionBookAccess` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `InteractionBookAccess` MODIFY `updatedAt` DATETIME(3) NOT NULL;
