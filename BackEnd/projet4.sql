
DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_UN_email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES 
(1,'julie','julie@wild.com',''),
(2,'sabrina','sabrina@wild.com',''),
(3,'leo','leo@wild.com','');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `reference` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(255) NOT NULL,
  `stock` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES 
(2,'3456','lavande','Lavandula (les lavandes) est un genre de plantes de la famille des Lamiaceae ,, anciennement nommées Labiées.','54'),
(3,'5784','hortensia','L\''hortensia est un arbuste facile à vivre, très florifère, souvent utilisé en massif ou en haie.','24'),
(4,'7663','cordyline','La Cordyline est une plante exotique adaptée aux climats chauds. Elle ne résiste pas à des températures inférieures à 10°C','43');
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;





