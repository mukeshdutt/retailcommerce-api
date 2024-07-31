-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: retailcommerce
-- ------------------------------------------------------
-- Server version	8.0.38

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `price` decimal(10,2) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `subcategory_id` int DEFAULT NULL,
  `stock_quantity` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `category_id` (`category_id`),
  KEY `subcategory_id` (`subcategory_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategories` (`subcategory_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Model:5-1013','Our Wheel Works On Specially Designed 14 Hp Singal Phase A.C Moter Having ',9800.00,'img1',1,1,0,'2024-07-28 13:18:29','2024-07-28 13:24:57'),(2,'Model:V-1220+','Our Wheel Works On Specially Designed 1 Hp Singal Phase D.C Moter Having 220V.',22420.00,'img2',2,2,0,'2024-07-28 13:18:32','2024-07-28 13:18:32'),(3,'Model:V-1220','Our Wheel Works On Speclally Designed 12  Hp Singal Phase D.C Motor Having 220.V',21240.00,'img3',3,3,0,'2024-07-28 13:18:35','2024-07-28 13:18:35'),(4,'Model :V1216','Our Wheel Works On Speclally Designed 14  Hp Singal Phase D.C Motor Having 220.V',19824.00,'img4',4,4,0,'2024-07-28 13:18:37','2024-07-28 13:18:37'),(5,'Model:V-1014','Our Wheel Works On Speclally Designed 14 Hp Singal Phase D.C Motor Having 220.V',18880.00,'img5',5,5,0,'2024-07-28 13:18:39','2024-07-28 13:23:52'),(6,'Model :5-2015+','Our Wheel Works On Speclally Designed 12 Hp Singal Phase A.C Motor Having 220.V',7670.00,'img6',6,6,0,'2024-07-28 13:18:41','2024-07-28 13:18:41'),(7,'Model : S -2015','	Our Wheel Works On Speclally Designed 12 Hp Singal Phase A.C  Motor Having 220.V',7080.00,'img7',7,7,0,'2024-07-28 13:18:43','2024-07-28 13:18:43'),(8,'Model:S-1515','	Our Wheel Work On Speclally Designed 12 Hp Singal Phase 220 Volt A.C Motor',6844.00,'img8',8,8,0,'2024-07-28 13:18:45','2024-07-28 13:18:45'),(9,'Model:S-2151','	Our Wheel Work On Speclally Designed 12 Hp Singal Phase 220 Volt A.C Motor',6490.00,'img9',9,9,0,'2024-07-28 13:18:47','2024-07-28 13:18:47'),(10,'Model:P-10','	Turn Table Having Cast Iron Plate Of 10\' Diameter .',1770.00,'img10',10,10,0,'2024-07-28 13:18:51','2024-07-28 13:18:51'),(11,'Terracotta Clay ','',30.00,'img11',11,11,0,'2024-07-28 13:18:53','2024-07-28 13:18:53');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-31 11:25:01
