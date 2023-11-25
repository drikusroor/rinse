-- CreateEnum
CREATE TYPE "AnswerMode" AS ENUM ('Manual', 'Text');

-- CreateTable
CREATE TABLE "PlayConfiguration" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "timeUntilNextFlashcard" INTEGER NOT NULL,
    "amountOfFlashcards" INTEGER,
    "firstFlashcardIndex" BOOLEAN,
    "answerMode" "AnswerMode" NOT NULL,
    "inverse" BOOLEAN NOT NULL,

    CONSTRAINT "PlayConfiguration_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PlayConfiguration" ADD CONSTRAINT "PlayConfiguration_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
