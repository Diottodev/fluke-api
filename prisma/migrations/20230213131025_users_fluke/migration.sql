-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PostsFluke" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "title" TEXT,
    "content" TEXT,
    "published" BOOLEAN DEFAULT false,
    "viewCount" INTEGER DEFAULT 0,
    "authorId" TEXT,
    CONSTRAINT "PostsFluke_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "UserFluke" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_PostsFluke" ("authorId", "content", "createdAt", "id", "published", "title", "updatedAt", "viewCount") SELECT "authorId", "content", "createdAt", "id", "published", "title", "updatedAt", "viewCount" FROM "PostsFluke";
DROP TABLE "PostsFluke";
ALTER TABLE "new_PostsFluke" RENAME TO "PostsFluke";
CREATE TABLE "new_UserFluke" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT,
    "name" TEXT,
    "lastName" TEXT,
    "password" TEXT,
    "birthDate" TEXT,
    "isOn" BOOLEAN,
    "bio" TEXT
);
INSERT INTO "new_UserFluke" ("bio", "birthDate", "email", "id", "isOn", "lastName", "name", "password") SELECT "bio", "birthDate", "email", "id", "isOn", "lastName", "name", "password" FROM "UserFluke";
DROP TABLE "UserFluke";
ALTER TABLE "new_UserFluke" RENAME TO "UserFluke";
CREATE UNIQUE INDEX "UserFluke_email_key" ON "UserFluke"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
