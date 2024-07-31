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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Pottery Wheel Singal Speed','img1','','2024-07-31 10:05:18.017672','2024-07-31 10:05:18.060565'),(2,'Pottery Wheel  Variable Speed','img2','','2024-07-31 10:05:18.017672','2024-07-31 10:05:18.060565'),(3,'Pottery Wheel Variable Speed','img3','','2024-07-31 10:05:18.017672','2024-07-31 10:05:18.060565'),(4,'Pottery Wheel Variable Speed','img4','','2024-07-31 10:05:18.017672','2024-07-31 10:05:18.060565'),(5,'Pottery Wheel Variable Speed','img5','','2024-07-31 10:05:18.017672','2024-07-31 10:05:18.060565'),(6,'Pottery Wheel Three Speed','img6','','2024-07-31 10:05:18.017672','2024-07-31 10:05:18.060565'),(7,'Pottery Wheel Three Speed','img7','','2024-07-31 10:05:18.017672','2024-07-31 10:05:18.060565'),(8,'Pottery Wheel Three Speed','img8','','2024-07-31 10:05:18.017672','2024-07-31 10:05:18.060565'),(9,'Pottery Wheel Three Speed','img9','','2024-07-31 10:05:18.017672','2024-07-31 10:05:18.060565'),(10,'Turn Table Banding Wheel','img10','','2024-07-31 10:05:18.017672','2024-07-31 10:05:18.060565'),(11,'Terracotta Clay ','img11','','2024-07-31 10:05:18.017672','2024-07-31 10:05:18.060565');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
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
