#creación de la base de datos
CREATE DATABASE IF NOT EXISTS xsupply;

#selección de la base de datos para su utilización
USE xsupply;

#creación de las tablas de la base de datos

CREATE TABLE IF NOT EXISTS `brands` (
  `idbrands` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8mb4 NOT NULL,
  PRIMARY KEY (`idbrands`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `categories` (
  `idcategories` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8mb4 NOT NULL,
  PRIMARY KEY (`idcategories`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `products` (
  `idproducts` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8mb4 NOT NULL,
  #creación y relacionamiento de la clave foránea
  `brand_id` int(11) NOT NULL,
  CONSTRAINT `fkproduct_brands`
  FOREIGN KEY (`brand_id`)
  REFERENCES `brands` (`idbrands`),
  `taste` varchar(45) CHARACTER SET utf8mb4 DEFAULT NULL,
  `weight` float NOT NULL,
  `price` float NOT NULL,
  `quantity` int(11) NOT NULL,
  #creación y relacionamiento de la clave foránea
  `category_id` int(11) NOT NULL,
  CONSTRAINT `fkproduct_category`
  FOREIGN KEY (`category_id`)
  REFERENCES `categories` (`idcategories`),
  `utility` text CHARACTER SET utf8mb4 NOT NULL,
  `purpose` text CHARACTER SET utf8mb4 NOT NULL,
  `image` mediumtext CHARACTER SET utf8mb4 NOT NULL,
  PRIMARY KEY (`idproducts`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `users` (
  `idusers` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8mb4 NOT NULL,
  `lastname` varchar(45) CHARACTER SET utf8mb4 NOT NULL,
  `email` varchar(45) CHARACTER SET utf8mb4 NOT NULL,
  `address` varchar(45) CHARACTER SET utf8mb4 NOT NULL,
  `phone` varchar(45) CHARACTER SET utf8mb4 NOT NULL,
  `password` tinytext CHARACTER SET utf8mb4 NOT NULL,
  `image` mediumtext CHARACTER SET utf8mb4 NOT NULL,
  PRIMARY KEY (`idusers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `orders` (
  `idorders` int(11) NOT NULL AUTO_INCREMENT,
  #creación y relacionamiento de la clave foránea
  `user_id` int(11) NOT NULL,
  CONSTRAINT `fkoreder_users`
  FOREIGN KEY (`user_id`)
  REFERENCES `users` (`idusers`),
  `amount` float NOT NULL,
  `date` date NOT NULL,
  `status` varchar(45) CHARACTER SET utf8mb4 NOT NULL,
  PRIMARY KEY (`idorders`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `order_details` (
  `idorder_details` int(11) NOT NULL AUTO_INCREMENT,
  #creación y relacionamiento de la clave foránea
  `order_id` int(11) NOT NULL,
  CONSTRAINT `fkorderDetail_orders`
  FOREIGN KEY (`order_id`)
  REFERENCES `orders` (`idorders`),
  #creación y relacionamiento de la clave foránea
  `product_id` int(11) NOT NULL,
  CONSTRAINT `fkorderDetail_products`
  FOREIGN KEY (`product_id`)
  REFERENCES `products` (`idproducts`),
  `price` float NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`idorder_details`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;