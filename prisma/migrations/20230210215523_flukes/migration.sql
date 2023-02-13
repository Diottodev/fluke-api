-- CreateTable
CREATE TABLE "UserFluke" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "lastName" TEXT,
    "password" TEXT,
    "birthDate" TEXT,
    "isOn" BOOLEAN NOT NULL,
    "bio" TEXT
);

-- CreateTable
CREATE TABLE "PostsFluke" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT,
    "content" TEXT,
    "published" BOOLEAN DEFAULT false,
    "viewCount" INTEGER DEFAULT 0,
    "authorId" TEXT,
    CONSTRAINT "PostsFluke_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "UserFluke" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "UserFluke_email_key" ON "UserFluke"("email");
