CREATE TABLE `CONTACT_INFO` (
  `contact_id` int(11) AUTO_INCREMENT,
  `contact_name` varchar(120) DEFAULT NULL,
  `contact_email` varchar(150) DEFAULT NULL,
  `contact_number` varchar(100) DEFAULT NULL,
  `subject` varchar(200) DEFAULT NULL,
  `message` varchar(500) DEFAULT NULL,
  `service_type` varchar(100) DEFAULT NULL,
  `service_location` varchar(100) DEFAULT NULL,
  date_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`contact_id`)
)type=innodb DEFAULT CHARACTER SET utf8	COLLATE utf8_general_ci;