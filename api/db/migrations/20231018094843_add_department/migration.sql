-- CreateTable
CREATE TABLE "Department" (
    "id" BIGSERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT,
    "ministry" BOOLEAN NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Department_id_key" ON "Department"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Department_code_key" ON "Department"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Department_name_key" ON "Department"("name");
