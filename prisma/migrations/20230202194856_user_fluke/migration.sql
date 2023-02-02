-- CreateTable
CREATE TABLE "UserFluke" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "lasName" TEXT,
    "password" TEXT,
    "firmPassword" TEXT,
    "birthDate" TEXT,
    "isOnline" BOOLEAN NOT NULL,
    "bio" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "UserFluke_email_key" ON "UserFluke"("email");
