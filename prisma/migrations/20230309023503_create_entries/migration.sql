-- CreateTable
CREATE TABLE "Entry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT,
    "start" DATETIME NOT NULL,
    "end" DATETIME,
    "habitId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Entry_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "Habit" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
