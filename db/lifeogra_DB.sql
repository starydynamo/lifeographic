-- phpMyAdmin SQL Dump
-- version 4.1.8
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 28, 2014 at 09:52 AM
-- Server version: 5.5.37-cll
-- PHP Version: 5.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `lifeogra_DB`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=5 ;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'love'),
(2, 'health'),
(3, 'assets'),
(4, 'mood');

-- --------------------------------------------------------

--
-- Table structure for table `category_values`
--

CREATE TABLE IF NOT EXISTS `category_values` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `category_id` int(10) unsigned NOT NULL,
  `category_value` double NOT NULL,
  `reasons` varchar(5000) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=145 ;

--
-- Dumping data for table `category_values`
--

INSERT INTO `category_values` (`id`, `user_id`, `category_id`, `category_value`, `reasons`, `created_at`, `updated_at`) VALUES
(84, 1, 2, 100, 'a:1:{i:0;s:8:"training";}', '2014-06-30 06:44:34', '2014-06-30 06:44:34'),
(85, 1, 2, 60, 'a:1:{i:0;s:10:"good-sleep";}', '2014-06-30 06:44:46', '2014-06-30 06:44:46'),
(86, 1, 1, 100, 'a:1:{i:0;s:10:"great-food";}', '2014-06-30 06:45:14', '2014-06-30 06:45:14'),
(87, 7, 2, 100, 'a:1:{i:0;s:8:"training";}', '2014-07-08 04:56:41', '2014-07-08 04:56:41'),
(88, 7, 2, 20, 'a:1:{i:0;s:8:"headache";}', '2014-07-08 04:57:19', '2014-07-08 04:57:19'),
(89, 7, 2, 20, 'a:1:{i:0;s:8:"nervious";}', '2014-07-08 04:57:37', '2014-07-08 04:57:37'),
(90, 7, 1, 100, 'a:2:{i:0;s:13:"high-pressure";i:1;s:10:"good-sleep";}', '2014-07-08 04:58:02', '2014-07-08 04:58:02'),
(91, 7, 3, 80, 'a:1:{i:0;s:10:"great-food";}', '2014-07-08 04:59:30', '2014-07-08 04:59:30'),
(92, 7, 4, 100, 'a:1:{i:0;s:8:"nervious";}', '2014-07-08 04:59:38', '2014-07-08 04:59:38'),
(93, 7, 2, 100, 'a:1:{i:0;s:9:"bad-sleep";}', '2014-07-08 08:07:59', '2014-07-08 08:07:59'),
(94, 7, 1, 20, 'a:1:{i:0;s:8:"headache";}', '2014-07-08 08:08:12', '2014-07-08 08:08:12'),
(95, 9, 2, 60, 'a:1:{i:0;s:13:"high-pressure";}', '2014-07-27 04:33:43', '2014-07-27 04:33:43'),
(96, 9, 2, 60, 'a:1:{i:0;s:4:"diet";}', '2014-08-10 11:07:43', '2014-08-10 11:07:43'),
(97, 11, 2, 100, 'a:1:{i:0;s:7:"fitness";}', '2014-08-11 07:08:49', '2014-08-11 07:08:49'),
(98, 9, 1, 60, 'a:1:{i:0;s:10:"new-reason";}', '2014-08-12 06:44:21', '2014-08-12 06:44:21'),
(99, 7, 2, 20, 'a:1:{i:0;s:6:"family";}', '2014-08-13 10:50:40', '2014-08-13 10:50:40'),
(100, 7, 4, 40, 'a:1:{i:0;s:9:"depressed";}', '2014-08-13 10:50:58', '2014-08-13 10:50:58'),
(101, 7, 4, 20, 'a:1:{i:0;s:9:"depressed";}', '2014-08-13 10:51:26', '2014-08-13 10:51:26'),
(102, 7, 2, 60, 'a:1:{i:0;s:4:"diet";}', '2014-08-13 10:57:45', '2014-08-13 10:57:45'),
(103, 7, 2, 80, 'a:1:{i:0;s:7:"fitness";}', '2014-08-13 10:57:58', '2014-08-13 10:57:58'),
(104, 9, 3, 40, 'a:2:{i:0;s:4:"debt";i:1;s:8:"morgedge";}', '2014-08-18 12:14:03', '2014-08-18 12:14:03'),
(105, 9, 3, 80, 'a:1:{i:0;s:5:"house";}', '2014-08-18 12:14:32', '2014-08-18 12:14:32'),
(106, 9, 3, 60, 'a:2:{i:0;s:3:"job";i:1;s:3:"car";}', '2014-08-18 12:14:41', '2014-08-18 12:14:41'),
(107, 9, 3, 100, 'a:2:{i:0;s:6:"travel";i:1;s:5:"house";}', '2014-08-18 12:14:50', '2014-08-18 12:14:50'),
(108, 9, 3, 40, 'a:3:{i:0;s:5:"money";i:1;s:3:"job";i:2;s:6:"travel";}', '2014-08-18 12:15:12', '2014-08-18 12:15:12'),
(109, 9, 3, 100, 'a:1:{i:0;s:3:"car";}', '2014-08-18 12:15:17', '2014-08-18 12:15:17'),
(110, 9, 3, 80, 'a:2:{i:0;s:5:"money";i:1;s:4:"debt";}', '2014-08-18 12:15:28', '2014-08-18 12:15:28'),
(111, 11, 2, 100, 'a:1:{i:0;s:10:"good-sleep";}', '2014-08-18 12:25:59', '2014-08-18 12:25:59'),
(112, 11, 4, 100, 'a:2:{i:0;s:5:"happy";i:1;s:7:"relaxed";}', '2014-08-18 12:26:19', '2014-08-18 12:26:19'),
(113, 11, 3, 20, 'a:1:{i:0;s:5:"money";}', '2014-08-18 12:26:27', '2014-08-18 12:26:27'),
(114, 11, 1, 100, 'a:1:{i:0;s:3:"sex";}', '2014-08-18 12:26:36', '2014-08-18 12:26:36'),
(115, 9, 4, 80, 'a:1:{i:0;s:7:"excited";}', '2014-08-18 12:28:15', '2014-08-18 12:28:15'),
(116, 7, 1, 80, 'a:1:{i:0;s:10:"friendship";}', '2014-08-18 12:31:48', '2014-08-18 12:31:48'),
(117, 7, 1, 20, 'a:1:{i:0;s:8:"intimacy";}', '2014-08-18 12:31:55', '2014-08-18 12:31:55'),
(118, 7, 1, 60, 'a:1:{i:0;s:10:"loneliness";}', '2014-08-18 12:32:02', '2014-08-18 12:32:02'),
(119, 7, 1, 40, 'a:1:{i:0;s:10:"friendship";}', '2014-08-18 12:32:08', '2014-08-18 12:32:08'),
(120, 7, 1, 100, 'a:1:{i:0;s:10:"friendship";}', '2014-08-18 12:32:18', '2014-08-18 12:32:18'),
(121, 7, 1, 100, 'a:1:{i:0;s:10:"friendship";}', '2014-08-18 12:32:23', '2014-08-18 12:32:23'),
(122, 7, 1, 100, 'a:1:{i:0;s:10:"friendship";}', '2014-08-18 12:32:35', '2014-08-18 12:32:35'),
(123, 7, 2, 60, 'a:1:{i:0;s:4:"diet";}', '2014-08-19 08:15:46', '2014-08-19 08:15:46'),
(124, 12, 3, 100, 'a:1:{i:0;s:3:"job";}', '2014-08-19 03:37:13', '2014-08-19 03:37:13'),
(125, 12, 3, 80, 'a:1:{i:0;s:5:"house";}', '2014-08-19 03:38:04', '2014-08-19 03:38:04'),
(126, 7, 2, 20, 'a:2:{i:0;s:9:"bad-sleep";i:1;s:6:"family";}', '2014-08-20 11:52:19', '2014-08-20 11:52:19'),
(127, 7, 2, 100, 'a:1:{i:0;s:9:"bad-sleep";}', '2014-08-20 11:52:47', '2014-08-20 11:52:47'),
(128, 7, 2, 100, 'a:1:{i:0;s:4:"diet";}', '2014-08-21 08:59:19', '2014-08-21 08:59:19'),
(129, 7, 2, 100, 'a:1:{i:0;s:4:"sick";}', '2014-08-21 01:11:51', '2014-08-21 01:11:51'),
(130, 7, 2, 100, 'a:1:{i:0;s:9:"bad-sleep";}', '2014-08-25 05:05:10', '2014-08-25 05:05:10'),
(131, 7, 1, 100, 'a:1:{i:0;s:8:"argument";}', '2014-08-26 10:01:14', '2014-08-26 10:01:14'),
(132, 1, 1, 80, 'a:3:{i:0;s:7:"kissing";i:1;s:3:"sex";i:2;s:10:"friendship";}', '2014-08-28 11:39:51', '2014-08-28 11:39:51'),
(133, 1, 3, 100, 'a:2:{i:0;s:5:"money";i:1;s:3:"job";}', '2014-08-28 11:40:13', '2014-08-28 11:40:13'),
(134, 1, 4, 60, 'a:2:{i:0;s:3:"sad";i:1;s:8:"stressed";}', '2014-08-28 11:40:31', '2014-08-28 11:40:31'),
(135, 1, 2, 80, 'a:1:{i:0;s:7:"fitness";}', '2014-08-28 03:39:15', '2014-08-28 03:39:15'),
(136, 1, 3, 80, 'a:1:{i:0;s:3:"car";}', '2014-08-28 03:43:40', '2014-08-28 03:43:40'),
(137, 1, 4, 100, 'a:3:{i:0;s:5:"happy";i:1;s:7:"excited";i:2;s:7:"relaxed";}', '2014-08-29 11:55:50', '2014-08-29 11:55:50'),
(138, 1, 2, 100, 'a:2:{i:0;s:7:"fitness";i:1;s:8:"medicine";}', '2014-09-07 11:47:15', '2014-09-07 11:47:15'),
(139, 1, 4, 80, 'a:1:{i:0;s:7:"excited";}', '2014-09-07 11:47:28', '2014-09-07 11:47:28'),
(140, 1, 4, 80, 'a:2:{i:0;s:5:"happy";i:1;s:7:"excited";}', '2014-09-08 18:58:16', '2014-09-08 18:58:16'),
(141, 1, 4, 100, 'a:1:{i:0;s:15:"sestric-mi-doso";}', '2014-09-08 18:59:14', '2014-09-08 18:59:14'),
(142, 7, 2, 40, 'a:1:{i:0;s:7:"fitness";}', '2014-10-27 09:46:16', '2014-10-27 09:46:16'),
(143, 7, 1, 100, 'a:1:{i:0;s:10:"friendship";}', '2014-10-27 09:59:14', '2014-10-27 09:59:14'),
(144, 7, 2, 20, 'a:1:{i:0;s:4:"diet";}', '2014-10-27 12:53:39', '2014-10-27 12:53:39');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE IF NOT EXISTS `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`migration`, `batch`) VALUES
('2014_04_13_135053_create_categories_table', 1),
('2014_04_13_135053_create_reasons_table', 1),
('2014_04_13_135053_create_users_table', 1),
('2014_04_13_135103_create_foreign_keys', 1);

-- --------------------------------------------------------

--
-- Table structure for table `reasons`
--

CREATE TABLE IF NOT EXISTS `reasons` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `category_id` int(10) unsigned NOT NULL,
  `reason` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `reason_text` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `reasons_user_id_foreign` (`user_id`),
  KEY `reasons_category_id_foreign` (`category_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=16 ;

--
-- Dumping data for table `reasons`
--

INSERT INTO `reasons` (`id`, `user_id`, `category_id`, `reason`, `reason_text`, `created_at`, `updated_at`) VALUES
(8, 9, 1, 'new-reason', 'New Reason', '2014-08-12 18:44:08', '2014-08-12 18:44:08'),
(9, 7, 2, 'family', 'Family', '2014-08-13 10:50:09', '2014-08-13 10:50:09'),
(10, 9, 3, 'morgedge', 'morgedge', '2014-08-18 12:13:51', '2014-08-18 12:13:51'),
(11, 11, 2, 'good-sleep', 'Good Sleep', '2014-08-18 12:25:53', '2014-08-18 12:25:53'),
(12, 1, 2, 'toothache', 'Toothache', '2014-08-28 15:41:09', '2014-08-28 15:41:09'),
(13, 1, 2, 'flu', 'Flu', '2014-08-29 11:54:38', '2014-08-29 11:54:38'),
(14, 1, 2, 'medicine', 'Medicine', '2014-09-07 11:47:04', '2014-09-07 11:47:04'),
(15, 1, 4, 'sestric-mi-doso', 'Sestric mi doso', '2014-09-08 18:59:05', '2014-09-08 18:59:05');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `first_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=15 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `remember_token`, `first_name`, `last_name`, `created_at`, `updated_at`) VALUES
(1, 'alektrich@gmail.com', '$2y$10$6brckkwmMqf3nDDpG/BsYu2Q4QnkfuTg8yzMdF0X1PR/teakw5eii', 'a1IgyEF6s1bSjPJMo3WOUYndNTTz9QW0la6Ow6KGxrLT87ATnX2i3SLh6zRO', 'Aleksandar', 'Trickovic', '2014-04-13', '2014-10-27'),
(3, 'alektrich@hotmail.com', '$2y$10$eHEfJcaGz43xIKGOLoybw.3tWDnEt3AUOIWcgFr4lHZKm5DxGgxQa', '', 'Demo', 'Person', '2014-04-16', '2014-04-16'),
(4, 'mail@gmail.com', '$2y$10$bLuqtliPphbanaLOAajj4.JJjeBmQzzInR.dh1FMYGBlDsXKugn7W', '', 'Sabrin', 'Alexander', '2014-04-24', '2014-04-24'),
(5, 'person@mail.com', '$2y$10$ZT8Is4uvMsaV442E0O/HgelRta6RCGd9bq/7QKfVNxdJ7tkSiM5I.', '', 'Person', 'Again', '2014-04-24', '2014-04-24'),
(6, 'demo@gmail.com', '$2y$10$nTvXg5JdyAUYibSW9Wo53OxpJD9.lbLXyXdlvSZZmq9Ia2GKYrCQ2', '', 'Demo', 'Person', '2014-05-21', '2014-05-21'),
(7, 'darrenbooy@hotmail.com', '$2y$10$HzVYptAH38.J6bZpZt71beiGaSA6BJhzjQEBGEQxFFqWCdjWLzctq', 'zTKANk5M5LkdUrhqfbNutLLbKaIZ6o8LhE2rA24ncxgrlC1Kbly4jvF9Izj0', 'Darren', 'Booy', '2014-05-21', '2014-10-26'),
(9, 'testnew@mail.com', '$2y$10$mSUWfJhLhumydyg4FBpaCeG1jqgIY5eW5HQFChoiIzZ3mvlw6n7h.', 'nhdx1EBqPJBNpEk5C0m2H2sL2iIQlFLfccdKW2XgOQPx3ANvlPjJ7QgcWPQn', 'Test', 'Account', '2014-06-04', '2014-08-19'),
(10, 'try@gmail.com', '$2y$10$.i9zoKMb8oAh3WXWu0UKfOtuQFflQWL36mTj/qKtqDfcNaaY0U6Nm', '', 'try', 'values', '2014-06-05', '2014-06-05'),
(11, 'sabrin.alexander@live.com', '$2y$10$96GcixWVLqlK0Y11/OKsrutVDX7jafxNZBmmGAWH1p0a0BCCekAaq', '', 'Sabrin', 'Freedman', '2014-08-11', '2014-08-11'),
(12, 'john@doe.com', '$2y$10$AS2IsLwUCqrNMsXH79dz8.BEhXp55gOSZdh6hN62ILBlouti/LrKS', '', 'John', 'Doe', '2014-08-19', '2014-08-19'),
(13, 'alektrich@live.com', '$2y$10$diSCZEjQiUZR6bS.gY5YLeqZj3Rc/lDtIKln5.kMWVbG4PbMzQ/yO', 'JC2muai9Uy8Mud4pKLj21C34vRsLluLI7fWG9WOaS8saooxVCjUqN1UcYAxs', 'Alex', 'Test', '2014-09-06', '2014-09-06'),
(14, 'alektrich@livelive.com', '$2y$10$69LyaQLofvDIHnKMwgk.ouqWRNjV4JQzuJFatMnbih68EQceNfjWG', 'ExsmOiPPMbAMsHX1R0Z5Nrc2EeOjzjaEyHx5YE53GFlB8wGfNwE3tfjIQ4Hv', 'test', 'reg', '2014-10-27', '2014-10-27');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
