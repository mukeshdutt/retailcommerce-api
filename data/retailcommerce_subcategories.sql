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
-- Table structure for table `subcategories`
--

DROP TABLE IF EXISTS `subcategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subcategories` (
  `subcategory_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `category_id` int DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`subcategory_id`),
  KEY `FK_f7b015bc580ae5179ba5a4f42ec` (`category_id`),
  CONSTRAINT `FK_f7b015bc580ae5179ba5a4f42ec` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategories`
--

LOCK TABLES `subcategories` WRITE;
/*!40000 ALTER TABLE `subcategories` DISABLE KEYS */;
INSERT INTO `subcategories` VALUES (1,'Model:5-1013','','img1',1,'2024-07-31 11:12:05.563496','2024-07-31 11:12:05.621744'),(2,'Model:V-1220+','','img2',2,'2024-07-31 11:12:05.563496','2024-07-31 11:12:05.621744'),(3,'Model:V-1220','','img3',3,'2024-07-31 11:12:05.563496','2024-07-31 11:12:05.621744'),(4,'Model :V1216','','img4',4,'2024-07-31 11:12:05.563496','2024-07-31 11:12:05.621744'),(5,'Model:V-1014','','img5',5,'2024-07-31 11:12:05.563496','2024-07-31 11:12:05.621744'),(6,'Model :5-2015+','','img6',6,'2024-07-31 11:12:05.563496','2024-07-31 11:12:05.621744'),(7,'Model : S -2015','','img7',7,'2024-07-31 11:12:05.563496','2024-07-31 11:12:05.621744'),(8,'Model:S-1515','','img8',8,'2024-07-31 11:12:05.563496','2024-07-31 11:12:05.621744'),(9,'Model:S-2151','','img9',9,'2024-07-31 11:12:05.563496','2024-07-31 11:12:05.621744'),(10,'Model:P-10','','img10',10,'2024-07-31 11:12:05.563496','2024-07-31 11:12:05.621744'),(11,'Terracotta Clay ','','img11',11,'2024-07-31 11:12:05.563496','2024-07-31 11:12:05.621744');
/*!40000 ALTER TABLE `subcategories` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-31 11:25:02
