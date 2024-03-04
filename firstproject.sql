-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 23, 2024 at 10:03 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `firstproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `id` int(11) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `details` varchar(555) NOT NULL,
  `photo` varchar(555) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `banner`
--

INSERT INTO `banner` (`id`, `title`, `details`, `photo`) VALUES
(1, 'Hello World', 'Life is too short not to smile.', 'banner001.jpg'),
(2, 'Tell Us', 'Communicate with us what you want to say.', 'banner002.jpg'),
(3, 'Modern Cities', 'With Us you will Always Be Updated.', 'banner003.jpg'),
(4, 'See The Life17', 'With Us You Can See The World', 'banner004.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `contactform`
--

CREATE TABLE `contactform` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `isRead` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contactform`
--

INSERT INTO `contactform` (`id`, `fullName`, `email`, `subject`, `message`, `isRead`) VALUES
(24, 'Kerolos Atef Shafik', 'kerolosss@gmail.com', 'playing videos', 'frfrfffffffffffffffff', 1),
(25, 'Kerolos Atef ', 'kerolosatefs@gmail.com', 'playing videos', 'iiiiiiiiiiiiiiiiiiiiiiiiii', 1),
(26, 'Kerolos Atef Shafik', 'kerolosatefs@gmail.com', 'playing videos', '55555555555555555555', 1);

-- --------------------------------------------------------

--
-- Table structure for table `projectcategory`
--

CREATE TABLE `projectcategory` (
  `projectID` int(50) UNSIGNED NOT NULL,
  `categoryID` int(50) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `projectcategory`
--

INSERT INTO `projectcategory` (`projectID`, `categoryID`) VALUES
(1, 1),
(1, 2),
(5, 5),
(1, 3),
(2, 3),
(2, 4),
(2, 5),
(3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullname`, `username`, `password`, `role`) VALUES
(3, 'kerolos', 'kerolos', '$2b$11$eT7BdHWj4Kxc3oSK74cnEOEQo/XrWbzVLCUPBrx6Z91m2XNt/DbAm', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `workcat`
--

CREATE TABLE `workcat` (
  `id` int(10) UNSIGNED NOT NULL,
  `catName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `workcat`
--

INSERT INTO `workcat` (`id`, `catName`) VALUES
(1, 'creative'),
(2, 'corporate'),
(3, 'portifolio'),
(4, 'Developed');

-- --------------------------------------------------------

--
-- Table structure for table `workcatproj`
--

CREATE TABLE `workcatproj` (
  `catId` int(10) UNSIGNED NOT NULL,
  `projId` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `workcatproj`
--

INSERT INTO `workcatproj` (`catId`, `projId`) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 3),
(2, 4),
(2, 5),
(3, 1),
(3, 5),
(3, 2),
(3, 2);

-- --------------------------------------------------------

--
-- Table structure for table `workproj`
--

CREATE TABLE `workproj` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `photo` varchar(555) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `workproj`
--

INSERT INTO `workproj` (`id`, `title`, `description`, `photo`) VALUES
(1, 'proj 01', 'desc 01', 'proj01.jpg'),
(2, 'proj 02', 'desc 02', 'proj02.jpg'),
(3, 'proj 03', 'desc 03', 'proj03.jpg'),
(4, 'proj 04', 'desc 04', 'proj04.jpg'),
(5, 'proj 03', 'desc 03', 'proj05.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contactform`
--
ALTER TABLE `contactform`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `workcat`
--
ALTER TABLE `workcat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `workproj`
--
ALTER TABLE `workproj`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `contactform`
--
ALTER TABLE `contactform`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `workcat`
--
ALTER TABLE `workcat`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `workproj`
--
ALTER TABLE `workproj`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
