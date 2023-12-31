-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 31, 2023 at 02:26 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `md_anisa_travel`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `name_ru` varchar(255) NOT NULL DEFAULT '',
  `name_en` varchar(255) NOT NULL DEFAULT '',
  `icon` varchar(255) DEFAULT NULL,
  `icon_type` varchar(255) DEFAULT NULL,
  `type_id` int(11) NOT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT 0,
  `sort` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `code`, `name`, `name_ru`, `name_en`, `icon`, `icon_type`, `type_id`, `parent_id`, `status`, `sort`) VALUES
(1, '/', 'Bosh sahifa', 'Главная', 'Home', NULL, NULL, 4, 0, 1, 1),
(2, '', 'Biz haqimizda', 'О Нас', 'About Us', NULL, NULL, 4, 0, 1, 1),
(3, 'about-company', 'Kompaniya haqida', 'О компании', 'About the company', NULL, NULL, 2, 2, 1, 1),
(4, 'asd', 'asd', 'asd', 'asd', NULL, NULL, 1, 3, 1, 1),
(5, 'asd', '4ete', 'asd', 'asd', NULL, NULL, 1, 4, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `category_type`
--

CREATE TABLE `category_type` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `name_ru` varchar(255) DEFAULT NULL,
  `name_en` varchar(255) DEFAULT NULL,
  `source` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category_type`
--

INSERT INTO `category_type` (`id`, `name`, `name_ru`, `name_en`, `source`) VALUES
(1, 'Sayohat', 'Путешествовать', 'Travel', 'travel'),
(2, 'Yangiliklar', 'Новости', 'News', 'news\r\n'),
(3, 'Xizmatlar', 'Услуги', 'Services', 'service'),
(4, 'Menu', 'Menu', 'Menu', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `username` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(500) DEFAULT NULL,
  `auth_key` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `access_token` varchar(500) DEFAULT NULL,
  `created` datetime DEFAULT current_timestamp(),
  `updated` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` int(11) DEFAULT 1,
  `role_id` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT 'default/avatar.png',
  `phone` varchar(255) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `username`, `password`, `auth_key`, `token`, `code`, `access_token`, `created`, `updated`, `status`, `role_id`, `image`, `phone`) VALUES
(4, 'Administrator', 'admin', '$2y$13$Hx9.Rv/1278Ap0H9MXMsEO6ghMsLP/6VZVaW4wJPTSSi85udZ6ili', NULL, NULL, NULL, NULL, '2023-10-19 17:03:20', '2023-11-10 12:25:11', 1, 100, 'default/avatar.png', '+998999670395');

-- --------------------------------------------------------

--
-- Table structure for table `user_role`
--

CREATE TABLE `user_role` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `url` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_role`
--

INSERT INTO `user_role` (`id`, `name`, `url`, `status`) VALUES
(100, 'Administrator', '/cp/', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_category_type_id` (`type_id`);

--
-- Indexes for table `category_type`
--
ALTER TABLE `category_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `FK_user_role_id` (`role_id`);

--
-- Indexes for table `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `category_type`
--
ALTER TABLE `category_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user_role`
--
ALTER TABLE `user_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `category`
--
ALTER TABLE `category`
  ADD CONSTRAINT `FK_category_type_id` FOREIGN KEY (`type_id`) REFERENCES `category_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_user_role_id` FOREIGN KEY (`role_id`) REFERENCES `user_role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
