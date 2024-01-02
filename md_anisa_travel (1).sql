-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 02, 2024 at 05:35 PM
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
  `sort` int(11) DEFAULT 0,
  `url` varchar(255) DEFAULT '#'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `code`, `name`, `name_ru`, `name_en`, `icon`, `icon_type`, `type_id`, `parent_id`, `status`, `sort`, `url`) VALUES
(1, '/', 'Bosh sahifa', 'Главная', 'Home', NULL, NULL, 4, 0, 1, 1, '#'),
(2, 'about', 'Biz haqimizda', 'О Нас', 'About Us', NULL, NULL, 4, 0, 1, 1, '#'),
(3, 'about-company', 'Kompaniya haqida', 'О компании', 'About the company', NULL, NULL, 2, 2, 1, 1, '#'),
(6, 'licenses', 'Litsenziya va sertifikatlar', 'Лицензии и сертификаты', 'License and certificate', NULL, NULL, 1, 2, 1, 2, '#'),
(7, 'offer', 'Ommaviy taklif', 'Публичная оферта', 'Public offer', NULL, NULL, 4, 2, 1, 3, '#'),
(8, 'tours', 'Sayohatlar', 'Туры', 'Tours', NULL, NULL, 1, 0, 1, 2, '#'),
(9, 'services', 'Xizmatlar', 'Услуги', 'Services', NULL, NULL, 3, 0, 1, 3, '#'),
(10, 'news', 'Yangiliklar', 'Новости', 'News', NULL, NULL, 2, 0, 1, 4, '#');

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
-- Table structure for table `travel`
--

CREATE TABLE `travel` (
  `id` int(11) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `old_price` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `short` text DEFAULT NULL,
  `days` int(11) DEFAULT NULL,
  `nights` int(11) DEFAULT NULL,
  `is_fly` int(11) DEFAULT 1,
  `detail` longtext DEFAULT NULL,
  `created` datetime DEFAULT current_timestamp(),
  `updated` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` int(11) DEFAULT 1,
  `user_id` int(11) DEFAULT NULL,
  `modify_id` int(11) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `name_ru` varchar(255) DEFAULT NULL,
  `name_en` varchar(255) DEFAULT NULL,
  `short_ru` text DEFAULT NULL,
  `short_en` text DEFAULT NULL,
  `detail_ru` longtext DEFAULT NULL,
  `detail_en` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `travel`
--

INSERT INTO `travel` (`id`, `cat_id`, `image`, `price`, `old_price`, `name`, `short`, `days`, `nights`, `is_fly`, `detail`, `created`, `updated`, `status`, `user_id`, `modify_id`, `code`, `name_ru`, `name_en`, `short_ru`, `short_en`, `detail_ru`, `detail_en`) VALUES
(1, 8, 'image/1704211489.1365.jpg', 234, 234, 'Gold Centro Rotana 3*+ Mena Plaza Al Barsha 4* (А)', 'Существует множество причин, почему именно вы должны посетить Объединенные Арабские Эмираты, где каждый Эмират отличается своей уникальностью. Поющие фонтаны, Архипелаг Пальмы, эта удивительная страна, расположенная в Персидском заливе, также является домом для самого высокого здания в мире и лучших роскошных отелей. За эти 7 ночей у вас будет возможность погрузиться в роскошь, яркость и сверкание ультрасовременного города Ближнего Востока, Дубай. А также насладиться идеальным спокойным отдыхом, в высококлассных пляжных курортах Абу-Даби . также известных живописной природой, красивыми чистыми пляжами.', 1, 1, 1, '<table>\r\n<tbody>\r\n<tr>\r\n<td colspan=\"2\">\r\n<div>\r\n<p><strong>\"Арабские Эмираты - Сказочная страна посреди суровой пустыни.\"</strong></p>\r\n<p><em>Существует множество причин, почему именно вы должны посетить Объединенные Арабские Эмираты, где каждый Эмират отличается своей уникальностью. Поющие фонтаны, Архипелаг Пальмы, эта удивительная страна, расположенная в Персидском заливе, также является домом для самого высокого здания в мире и лучших роскошных отелей. За эти 7 ночей у вас будет возможность погрузиться в роскошь, яркость и сверкание ультрасовременного города Ближнего Востока, Дубай. А также насладиться идеальным спокойным отдыхом, в высококлассных пляжных курортах Абу-Даби . также известных живописной природой, красивыми чистыми пляжами.</em></p>\r\n<p><strong>❗️❗️❗</strong></p>\r\n<p><strong>Внимание!</strong></p>\r\n<strong>Коллеги, обращаем ваше внимание на изменение ОЧЕРЕДНОСТИ ГОРОДОВ по программам:</strong>\r\n<p>&nbsp;</p>\r\n<p><strong>✈Абу-Даби</strong></p>\r\n<p><strong>Вылет 23 и 24 декабря&nbsp;&ndash; начало программы в Дубай 3 ночи + 4 ночи Абу-Даби</strong></p>\r\n<p><strong>Вылет 25 декабря&nbsp;&ndash; начало программы в Дубай 3 ночи + 4 ночи Абу-Даби (Новый Год в Абу-Даби)</strong></p>\r\n<br><br>\r\n<p><strong>1 день . Ташкент - Абу-Даби .</strong></p>\r\n<p>Прилет в Абу-Даби .</p>\r\n<p>Трансфер в отель.</p>\r\n<p>Заселение в гостиницу.</p>\r\n<br>\r\n<p><strong>2-4 день . Абу-Даби .</strong></p>\r\n<p>Завтрак в отеле</p>\r\n<p>Свободное время</p>\r\n<p>Ночь в отеле</p>\r\n<br>\r\n<p><strong>5 День . Абу-Даби -Дубай .</strong></p>\r\n<p>Завтрак в отеле.</p>\r\n<p>Выселение из отеля.</p>\r\n<p>Трансфер в Дубай.</p>\r\n<p>Заселение в отель в Дубай .</p>\r\n<p>Ночь в отеле .</p>\r\n<br>\r\n<p><strong>С 6-7день . Дубай</strong></p>\r\n<p>Завтрак в отеле</p>\r\n<p>Свободное время</p>\r\n<p>Ночь в отеле</p>\r\n<br>\r\n<p><strong>8 день . Дубай -Абу-Даби - Ташкент</strong></p>\r\n<p>Завтрак в отеле</p>\r\n<p>Выселение из отеля</p>\r\n<p>Трансфер в аэропорт Абу-Даби</p>\r\n<br>\r\n<p><strong>В стоимость включено:</strong></p>\r\n<p>- Международные авиаперелеты</p>\r\n<p>- Трансфер (аэропорт-отель-эропорт) и по маршруту тура</p>\r\n<p>- Проживание в гостиницах Дубай и Абу Даби</p>\r\n<p>в Дубай:</p>\r\n<p><strong><a href=\"https://www.booking.com/hotel/ae/mena-plaza-albarsha-dubai.ru.html\">Mena Plaza Al Barsha 4*</a></strong></p>\r\n<p>в Абу-Даби :</p>\r\n<p><strong><a href=\"https://www.booking.com/hotel/ae/centro-capital-center-by-rotana.ru.html\">Centro Rotana 3*</a></strong></p>\r\n<p>- Питание: По концепции указанной при бронировании</p>\r\n<br>\r\n<p><strong>Экскурсии:</strong></p>\r\n<p>- Экскурсия по Дубай</p>\r\n<p>- Экскурсия в мечеть в Абу Даби</p>\r\n<br>\r\n<p><strong>❗️❗️❗️ Обзорная экскурсия Дубай и экскурсия в мечеть в Абу-Даби будут проведены принимающей компанией. День и время будут сообщены туристам непосредственно в ОАЭ гидами</strong></p>\r\n<p>*Компания имеет право заменить отель на отель такой же категории</p>\r\n<p>** Программа тура может изменяться в связи с праздниками в ОАЭ и высокими датами с целью обеспечить более комфортную логистику для клиентов</p>\r\n</div>\r\n</td>\r\n</tr>\r\n</tbody>\r\n</table>', '2024-01-02 21:09:10', '2024-01-02 21:15:19', 1, 4, 4, 'Gold-Centro-Rotana-3---Mena-Plaza-Al-Barsha-4---A-', 'Gold Centro Rotana 3*+ Mena Plaza Al Barsha 4* (А)', 'Gold Centro Rotana 3*+ Mena Plaza Al Barsha 4* (А)', 'Существует множество причин, почему именно вы должны посетить Объединенные Арабские Эмираты, где каждый Эмират отличается своей уникальностью. Поющие фонтаны, Архипелаг Пальмы, эта удивительная страна, расположенная в Персидском заливе, также является домом для самого высокого здания в мире и лучших роскошных отелей. За эти 7 ночей у вас будет возможность погрузиться в роскошь, яркость и сверкание ультрасовременного города Ближнего Востока, Дубай. А также насладиться идеальным спокойным отдыхом, в высококлассных пляжных курортах Абу-Даби . также известных живописной природой, красивыми чистыми пляжами.', 'Существует множество причин, почему именно вы должны посетить Объединенные Арабские Эмираты, где каждый Эмират отличается своей уникальностью. Поющие фонтаны, Архипелаг Пальмы, эта удивительная страна, расположенная в Персидском заливе, также является домом для самого высокого здания в мире и лучших роскошных отелей. За эти 7 ночей у вас будет возможность погрузиться в роскошь, яркость и сверкание ультрасовременного города Ближнего Востока, Дубай. А также насладиться идеальным спокойным отдыхом, в высококлассных пляжных курортах Абу-Даби . также известных живописной природой, красивыми чистыми пляжами.', '<table>\r\n<tbody>\r\n<tr>\r\n<td colspan=\"2\">\r\n<div>\r\n<p><strong>\"Арабские Эмираты - Сказочная страна посреди суровой пустыни.\"</strong></p>\r\n<p><em>Существует множество причин, почему именно вы должны посетить Объединенные Арабские Эмираты, где каждый Эмират отличается своей уникальностью. Поющие фонтаны, Архипелаг Пальмы, эта удивительная страна, расположенная в Персидском заливе, также является домом для самого высокого здания в мире и лучших роскошных отелей. За эти 7 ночей у вас будет возможность погрузиться в роскошь, яркость и сверкание ультрасовременного города Ближнего Востока, Дубай. А также насладиться идеальным спокойным отдыхом, в высококлассных пляжных курортах Абу-Даби . также известных живописной природой, красивыми чистыми пляжами.</em></p>\r\n<p><strong>❗️❗️❗</strong></p>\r\n<p><strong>Внимание!</strong></p>\r\n<strong>Коллеги, обращаем ваше внимание на изменение ОЧЕРЕДНОСТИ ГОРОДОВ по программам:</strong>\r\n<p>&nbsp;</p>\r\n<p><strong>✈Абу-Даби</strong></p>\r\n<p><strong>Вылет 23 и 24 декабря&nbsp;&ndash; начало программы в Дубай 3 ночи + 4 ночи Абу-Даби</strong></p>\r\n<p><strong>Вылет 25 декабря&nbsp;&ndash; начало программы в Дубай 3 ночи + 4 ночи Абу-Даби (Новый Год в Абу-Даби)</strong></p>\r\n<br><br>\r\n<p><strong>1 день . Ташкент - Абу-Даби .</strong></p>\r\n<p>Прилет в Абу-Даби .</p>\r\n<p>Трансфер в отель.</p>\r\n<p>Заселение в гостиницу.</p>\r\n<br>\r\n<p><strong>2-4 день . Абу-Даби .</strong></p>\r\n<p>Завтрак в отеле</p>\r\n<p>Свободное время</p>\r\n<p>Ночь в отеле</p>\r\n<br>\r\n<p><strong>5 День . Абу-Даби -Дубай .</strong></p>\r\n<p>Завтрак в отеле.</p>\r\n<p>Выселение из отеля.</p>\r\n<p>Трансфер в Дубай.</p>\r\n<p>Заселение в отель в Дубай .</p>\r\n<p>Ночь в отеле .</p>\r\n<br>\r\n<p><strong>С 6-7день . Дубай</strong></p>\r\n<p>Завтрак в отеле</p>\r\n<p>Свободное время</p>\r\n<p>Ночь в отеле</p>\r\n<br>\r\n<p><strong>8 день . Дубай -Абу-Даби - Ташкент</strong></p>\r\n<p>Завтрак в отеле</p>\r\n<p>Выселение из отеля</p>\r\n<p>Трансфер в аэропорт Абу-Даби</p>\r\n<br>\r\n<p><strong>В стоимость включено:</strong></p>\r\n<p>- Международные авиаперелеты</p>\r\n<p>- Трансфер (аэропорт-отель-эропорт) и по маршруту тура</p>\r\n<p>- Проживание в гостиницах Дубай и Абу Даби</p>\r\n<p>в Дубай:</p>\r\n<p><strong><a href=\"https://www.booking.com/hotel/ae/mena-plaza-albarsha-dubai.ru.html\">Mena Plaza Al Barsha 4*</a></strong></p>\r\n<p>в Абу-Даби :</p>\r\n<p><strong><a href=\"https://www.booking.com/hotel/ae/centro-capital-center-by-rotana.ru.html\">Centro Rotana 3*</a></strong></p>\r\n<p>- Питание: По концепции указанной при бронировании</p>\r\n<br>\r\n<p><strong>Экскурсии:</strong></p>\r\n<p>- Экскурсия по Дубай</p>\r\n<p>- Экскурсия в мечеть в Абу Даби</p>\r\n<br>\r\n<p><strong>❗️❗️❗️ Обзорная экскурсия Дубай и экскурсия в мечеть в Абу-Даби будут проведены принимающей компанией. День и время будут сообщены туристам непосредственно в ОАЭ гидами</strong></p>\r\n<p>*Компания имеет право заменить отель на отель такой же категории</p>\r\n<p>** Программа тура может изменяться в связи с праздниками в ОАЭ и высокими датами с целью обеспечить более комфортную логистику для клиентов</p>\r\n</div>\r\n</td>\r\n</tr>\r\n</tbody>\r\n</table>', '<table>\r\n<tbody>\r\n<tr>\r\n<td colspan=\"2\">\r\n<div>\r\n<p><strong>\"Арабские Эмираты - Сказочная страна посреди суровой пустыни.\"</strong></p>\r\n<p><em>Существует множество причин, почему именно вы должны посетить Объединенные Арабские Эмираты, где каждый Эмират отличается своей уникальностью. Поющие фонтаны, Архипелаг Пальмы, эта удивительная страна, расположенная в Персидском заливе, также является домом для самого высокого здания в мире и лучших роскошных отелей. За эти 7 ночей у вас будет возможность погрузиться в роскошь, яркость и сверкание ультрасовременного города Ближнего Востока, Дубай. А также насладиться идеальным спокойным отдыхом, в высококлассных пляжных курортах Абу-Даби . также известных живописной природой, красивыми чистыми пляжами.</em></p>\r\n<p><strong>❗️❗️❗</strong></p>\r\n<p><strong>Внимание!</strong></p>\r\n<strong>Коллеги, обращаем ваше внимание на изменение ОЧЕРЕДНОСТИ ГОРОДОВ по программам:</strong>\r\n<p>&nbsp;</p>\r\n<p><strong>✈Абу-Даби</strong></p>\r\n<p><strong>Вылет 23 и 24 декабря&nbsp;&ndash; начало программы в Дубай 3 ночи + 4 ночи Абу-Даби</strong></p>\r\n<p><strong>Вылет 25 декабря&nbsp;&ndash; начало программы в Дубай 3 ночи + 4 ночи Абу-Даби (Новый Год в Абу-Даби)</strong></p>\r\n<br><br>\r\n<p><strong>1 день . Ташкент - Абу-Даби .</strong></p>\r\n<p>Прилет в Абу-Даби .</p>\r\n<p>Трансфер в отель.</p>\r\n<p>Заселение в гостиницу.</p>\r\n<br>\r\n<p><strong>2-4 день . Абу-Даби .</strong></p>\r\n<p>Завтрак в отеле</p>\r\n<p>Свободное время</p>\r\n<p>Ночь в отеле</p>\r\n<br>\r\n<p><strong>5 День . Абу-Даби -Дубай .</strong></p>\r\n<p>Завтрак в отеле.</p>\r\n<p>Выселение из отеля.</p>\r\n<p>Трансфер в Дубай.</p>\r\n<p>Заселение в отель в Дубай .</p>\r\n<p>Ночь в отеле .</p>\r\n<br>\r\n<p><strong>С 6-7день . Дубай</strong></p>\r\n<p>Завтрак в отеле</p>\r\n<p>Свободное время</p>\r\n<p>Ночь в отеле</p>\r\n<br>\r\n<p><strong>8 день . Дубай -Абу-Даби - Ташкент</strong></p>\r\n<p>Завтрак в отеле</p>\r\n<p>Выселение из отеля</p>\r\n<p>Трансфер в аэропорт Абу-Даби</p>\r\n<br>\r\n<p><strong>В стоимость включено:</strong></p>\r\n<p>- Международные авиаперелеты</p>\r\n<p>- Трансфер (аэропорт-отель-эропорт) и по маршруту тура</p>\r\n<p>- Проживание в гостиницах Дубай и Абу Даби</p>\r\n<p>в Дубай:</p>\r\n<p><strong><a href=\"https://www.booking.com/hotel/ae/mena-plaza-albarsha-dubai.ru.html\">Mena Plaza Al Barsha 4*</a></strong></p>\r\n<p>в Абу-Даби :</p>\r\n<p><strong><a href=\"https://www.booking.com/hotel/ae/centro-capital-center-by-rotana.ru.html\">Centro Rotana 3*</a></strong></p>\r\n<p>- Питание: По концепции указанной при бронировании</p>\r\n<br>\r\n<p><strong>Экскурсии:</strong></p>\r\n<p>- Экскурсия по Дубай</p>\r\n<p>- Экскурсия в мечеть в Абу Даби</p>\r\n<br>\r\n<p><strong>❗️❗️❗️ Обзорная экскурсия Дубай и экскурсия в мечеть в Абу-Даби будут проведены принимающей компанией. День и время будут сообщены туристам непосредственно в ОАЭ гидами</strong></p>\r\n<p>*Компания имеет право заменить отель на отель такой же категории</p>\r\n<p>** Программа тура может изменяться в связи с праздниками в ОАЭ и высокими датами с целью обеспечить более комфортную логистику для клиентов</p>\r\n</div>\r\n</td>\r\n</tr>\r\n</tbody>\r\n</table>');

-- --------------------------------------------------------

--
-- Table structure for table `travel_image`
--

CREATE TABLE `travel_image` (
  `travel_id` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL DEFAULT '',
  `status` int(11) DEFAULT 1,
  `sort` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `travel_image`
--

INSERT INTO `travel_image` (`travel_id`, `id`, `image`, `status`, `sort`) VALUES
(1, 1, 'image/1704212532.6297.png', 1, 0),
(1, 2, 'image/1704212636.6455.jpg', 1, 0);

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
  ADD UNIQUE KEY `code` (`code`),
  ADD KEY `FK_category_type_id` (`type_id`);

--
-- Indexes for table `category_type`
--
ALTER TABLE `category_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `travel`
--
ALTER TABLE `travel`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`),
  ADD KEY `FK_travel_user_id` (`user_id`),
  ADD KEY `FK_travel_modify_id` (`modify_id`),
  ADD KEY `FK_travel_cat_id` (`cat_id`);

--
-- Indexes for table `travel_image`
--
ALTER TABLE `travel_image`
  ADD PRIMARY KEY (`travel_id`,`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `category_type`
--
ALTER TABLE `category_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `travel`
--
ALTER TABLE `travel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
-- Constraints for table `travel`
--
ALTER TABLE `travel`
  ADD CONSTRAINT `FK_travel_cat_id` FOREIGN KEY (`cat_id`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_travel_modify_id` FOREIGN KEY (`modify_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_travel_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_user_role_id` FOREIGN KEY (`role_id`) REFERENCES `user_role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
