/*
  Warnings:

  - Made the column `meta` on table `InteractionFormValue` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `InteractionFormValue` MODIFY `meta` JSON NOT NULL;
