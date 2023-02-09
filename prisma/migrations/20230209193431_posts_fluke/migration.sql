-- CreateTable
CREATE TABLE "PostsFluke" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "viewCount" INTEGER NOT NULL DEFAULT 0,
    "authorId" TEXT,
    CONSTRAINT "PostsFluke_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "UserFluke" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
