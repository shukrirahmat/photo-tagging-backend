-- CreateTable
CREATE TABLE "Ranking" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "time" DOUBLE PRECISION NOT NULL,
    "dateAdded" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ranking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "writer" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "dateAdded" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);
