-- CreateTable
CREATE TABLE "Relation_type" (
    "type_id" SERIAL NOT NULL,
    "type_name" TEXT NOT NULL,
    "is_unique" BOOLEAN NOT NULL,

    CONSTRAINT "Relation_type_pkey" PRIMARY KEY ("type_id")
);

-- CreateTable
CREATE TABLE "Relation" (
    "relation_id" SERIAL NOT NULL,
    "subject_entity" TEXT NOT NULL,
    "object_entity" TEXT NOT NULL,
    "relation_type_id" INTEGER NOT NULL,
    "article_id" INTEGER NOT NULL,

    CONSTRAINT "Relation_pkey" PRIMARY KEY ("relation_id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "employee_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("employee_id")
);

-- CreateTable
CREATE TABLE "Article" (
    "article_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "date_published" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("article_id")
);

-- CreateTable
CREATE TABLE "_ArticleToEmployee" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ArticleToEmployee_AB_unique" ON "_ArticleToEmployee"("A", "B");

-- CreateIndex
CREATE INDEX "_ArticleToEmployee_B_index" ON "_ArticleToEmployee"("B");

-- AddForeignKey
ALTER TABLE "Relation" ADD CONSTRAINT "Relation_relation_type_id_fkey" FOREIGN KEY ("relation_type_id") REFERENCES "Relation_type"("type_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Relation" ADD CONSTRAINT "Relation_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "Article"("article_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArticleToEmployee" ADD CONSTRAINT "_ArticleToEmployee_A_fkey" FOREIGN KEY ("A") REFERENCES "Article"("article_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArticleToEmployee" ADD CONSTRAINT "_ArticleToEmployee_B_fkey" FOREIGN KEY ("B") REFERENCES "Employee"("employee_id") ON DELETE CASCADE ON UPDATE CASCADE;
