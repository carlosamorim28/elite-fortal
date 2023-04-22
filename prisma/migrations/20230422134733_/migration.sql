/*
  Warnings:

  - You are about to drop the column `user_1_id` on the `Slashs` table. All the data in the column will be lost.
  - You are about to drop the column `user_2_id` on the `Slashs` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `User_Tournaments` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Users` table. All the data in the column will be lost.
  - Added the required column `user_profile_1_id` to the `Slashs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_profile_2_id` to the `Slashs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_profile_id` to the `User_Tournaments` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "UserProfile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Slashs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_profile_1_id" INTEGER NOT NULL,
    "user_profile_2_id" INTEGER NOT NULL,
    "tournament_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "usersId" INTEGER,
    CONSTRAINT "Slashs_tournament_id_fkey" FOREIGN KEY ("tournament_id") REFERENCES "Tournaments" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Slashs_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "UserProfile" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Slashs" ("created_at", "id", "tournament_id", "updated_at", "usersId") SELECT "created_at", "id", "tournament_id", "updated_at", "usersId" FROM "Slashs";
DROP TABLE "Slashs";
ALTER TABLE "new_Slashs" RENAME TO "Slashs";
CREATE TABLE "new_User_Tournaments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_profile_id" INTEGER NOT NULL,
    "tournament_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "usersId" INTEGER,
    CONSTRAINT "User_Tournaments_user_profile_id_fkey" FOREIGN KEY ("user_profile_id") REFERENCES "UserProfile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_Tournaments_tournament_id_fkey" FOREIGN KEY ("tournament_id") REFERENCES "Tournaments" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_Tournaments_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User_Tournaments" ("created_at", "id", "tournament_id", "updated_at") SELECT "created_at", "id", "tournament_id", "updated_at" FROM "User_Tournaments";
DROP TABLE "User_Tournaments";
ALTER TABLE "new_User_Tournaments" RENAME TO "User_Tournaments";
CREATE TABLE "new_Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rule" TEXT NOT NULL DEFAULT 'player',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_Users" ("created_at", "email", "id", "password", "rule", "updated_at") SELECT "created_at", "email", "id", "password", "rule", "updated_at" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
