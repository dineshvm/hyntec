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

CREATE TABLE `hyntec`.`contact_info` ( `contact_id` INT(11) NOT NULL AUTO_INCREMENT , `contact_name` VARCHAR(120) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL , `contact_email` VARCHAR(150) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL , `contact_number` VARCHAR(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL , `subject` VARCHAR(150) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL , `message` VARCHAR(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL , `service_type` VARCHAR(150) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL , `service_location` VARCHAR(150) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL , `date_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`contact_id`)) ENGINE = InnoDB CHARSET=utf8 COLLATE utf8_general_ci;