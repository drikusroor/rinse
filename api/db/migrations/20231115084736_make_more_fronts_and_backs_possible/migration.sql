-- Start a transaction
BEGIN;

-- Step 1: Add new columns without dropping the old ones
ALTER TABLE "Flashcard" ADD COLUMN "new_front" TEXT[];
ALTER TABLE "Flashcard" ADD COLUMN "new_back" TEXT[];

-- Step 2: Copy data from old columns to new columns
UPDATE "Flashcard" SET "new_front" = ARRAY["front"];
UPDATE "Flashcard" SET "new_back" = ARRAY["back"];

-- Step 3: Drop the old columns
ALTER TABLE "Flashcard" DROP COLUMN "front";
ALTER TABLE "Flashcard" DROP COLUMN "back";

-- Step 4: Rename the new columns to use the desired names
ALTER TABLE "Flashcard" RENAME COLUMN "new_front" TO "front";
ALTER TABLE "Flashcard" RENAME COLUMN "new_back" TO "back";

-- Commit the transaction
COMMIT;
