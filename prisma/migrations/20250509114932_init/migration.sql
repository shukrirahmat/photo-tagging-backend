-- CreateTable
CREATE TABLE "HiddenObject" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "xstart" INTEGER NOT NULL,
    "xend" INTEGER NOT NULL,
    "ystart" INTEGER NOT NULL,
    "yend" INTEGER NOT NULL,

    CONSTRAINT "HiddenObject_pkey" PRIMARY KEY ("id")
);
