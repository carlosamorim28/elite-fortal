-- CreateTable
CREATE TABLE "Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rule" TEXT NOT NULL DEFAULT 'player',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Tournaments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "prize" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "occur_date" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "User_Tournaments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "tournament_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "User_Tournaments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_Tournaments_tournament_id_fkey" FOREIGN KEY ("tournament_id") REFERENCES "Tournaments" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Slashs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_1_id" INTEGER NOT NULL,
    "user_2_id" INTEGER NOT NULL,
    "tournament_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "usersId" INTEGER,
    CONSTRAINT "Slashs_tournament_id_fkey" FOREIGN KEY ("tournament_id") REFERENCES "Tournaments" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Slashs_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
