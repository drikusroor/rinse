/*
  Warnings:

  - The primary key for the `TeacherStudent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[teacherId,studentId]` on the table `TeacherStudent` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "TeacherStudent" DROP CONSTRAINT "TeacherStudent_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "TeacherStudent_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "TeacherStudent_teacherId_studentId_key" ON "TeacherStudent"("teacherId", "studentId");
