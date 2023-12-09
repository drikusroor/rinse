/*
  Warnings:

  - Added the required column `accepted` to the `TeacherStudent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TeacherStudent" ADD COLUMN     "accepted" BOOLEAN NOT NULL;
