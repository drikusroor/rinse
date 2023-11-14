/*
  Warnings:

  - You are about to drop the column `webAuthnChallenge` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_webAuthnChallenge_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "webAuthnChallenge";
