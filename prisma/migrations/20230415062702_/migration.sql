-- CreateTable
CREATE TABLE `Especie` (
    `id_especie` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `clasificacion` VARCHAR(191) NOT NULL,
    `esperanza_vida` INTEGER NOT NULL,
    `peso_promedio` DOUBLE NOT NULL,

    PRIMARY KEY (`id_especie`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
