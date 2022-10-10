-- CreateTable
CREATE TABLE "tb_users" (
    "token" TEXT NOT NULL,
    "id" SERIAL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "total_album" INTEGER NOT NULL,
    "total_stickers" INTEGER NOT NULL,
    "total_duplicates" INTEGER NOT NULL,
    "total_complete" INTEGER NOT NULL,
    "total_complete_percent" INTEGER NOT NULL,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "tb_users_pkey" PRIMARY KEY ("token")
);

-- CreateTable
CREATE TABLE "tb_countries" (
    "id" SERIAL NOT NULL,
    "country_code" TEXT NOT NULL,
    "country_name" TEXT NOT NULL,
    "index" INTEGER NOT NULL,
    "stickers_start" INTEGER NOT NULL,
    "stickers_end" INTEGER NOT NULL,
    "flag" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "tb_countries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_users_email_key" ON "tb_users"("email");
