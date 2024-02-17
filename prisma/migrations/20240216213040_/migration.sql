/*
  Warnings:

  - You are about to drop the column `title` on the `InteractionFormFields` table. All the data in the column will be lost.
  - Added the required column `label` to the `InteractionFormFields` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `InteractionFormFields` DROP COLUMN `title`,
    ADD COLUMN `defaultValue` VARCHAR(191) NULL,
    ADD COLUMN `label` VARCHAR(191) NOT NULL,
    ADD COLUMN `span` INTEGER NULL DEFAULT 12;
