/*
  Warnings:

  - You are about to drop the column `interactionFormId` on the `InteractionFormCategory` table. All the data in the column will be lost.
  - Made the column `createdAt` on table `BookCategory` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `BookCategory` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `FormCategory` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `FormCategory` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `InteractionBookCategory` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `InteractionBookCategory` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `InteractionBookForms` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `InteractionBookForms` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `InteractionBooks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `InteractionBooks` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `formSchemaId` to the `InteractionFormCategory` table without a default value. This is not possible if the table is not empty.
  - Made the column `createdAt` on table `InteractionFormCategory` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `InteractionFormCategory` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `InteractionFormFields` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `InteractionFormFields` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `InteractionFormSchemas` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `InteractionFormSchemas` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `InteractionFormValue` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `InteractionFormValue` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `Interactions` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Interactions` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `SchemaRelations` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `SchemaRelations` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `Users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `InteractionFormCategory` DROP FOREIGN KEY `InteractionFormCategory_interactionFormId_fkey`;

-- AlterTable
ALTER TABLE `BookCategory` MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `deletedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `FormCategory` MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `deletedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `InteractionBookCategory` MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `deletedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `InteractionBookForms` MODIFY `deletedAt` DATETIME(3) NULL,
    MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `InteractionBooks` MODIFY `deletedAt` DATETIME(3) NULL,
    MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `InteractionFormCategory` DROP COLUMN `interactionFormId`,
    ADD COLUMN `formSchemaId` INTEGER NOT NULL,
    MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `deletedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `InteractionFormFields` MODIFY `deletedAt` DATETIME(3) NULL,
    MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `InteractionFormSchemas` MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `deletedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `InteractionFormValue` MODIFY `deletedAt` DATETIME(3) NULL,
    MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Interactions` MODIFY `deletedAt` DATETIME(3) NULL,
    MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `SchemaRelations` MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `deletedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Users` MODIFY `deletedAt` DATETIME(3) NULL,
    MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NOT NULL;

-- AddForeignKey
ALTER TABLE `InteractionFormCategory` ADD CONSTRAINT `InteractionFormCategory_formSchemaId_fkey` FOREIGN KEY (`formSchemaId`) REFERENCES `InteractionFormSchemas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
