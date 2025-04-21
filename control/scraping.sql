-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 
-- 伺服器版本： 8.0.17
-- PHP 版本： 7.3.10


SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫_ `scraping`
--
CREATE DATABASE IF NOT EXISTS `scraping` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `scraping`;

-- --------------------------------------------------------

--
-- 資料表結構 `network_attack`
--

CREATE TABLE `network_attack` (
  `no` int(11) NOT NULL,
  `a_time` datetime DEFAULT NULL,
  `a_type` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `a_ip` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `a_package` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `scraping_film`
--

CREATE TABLE `scraping_film` (
  `no` int(11) NOT NULL,
  `r_time` datetime DEFAULT NULL,
  `kind` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `title` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `url` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



--
-- 資料表結構 `scraping_line_notify`
--

CREATE TABLE `scraping_line_notify` (
  `no` int(11) NOT NULL,
  `s_time` datetime DEFAULT NULL,
  `e_time` datetime DEFAULT NULL,
  `kind` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` text COLLATE utf8_unicode_ci,
  `total_counts` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `scraping_log`
--

CREATE TABLE `scraping_log` (
  `no` int(11) NOT NULL,
  `s_time` datetime DEFAULT NULL,
  `e_time` datetime DEFAULT NULL,
  `kind` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` text COLLATE utf8_unicode_ci,
  `total_counts` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
-- --------------------------------------------------------
--
-- 已傾印資料表的索引
--

-- --------------------------------------------------------

--
-- 資料表結構 `scraping_news`
--

CREATE TABLE `scraping_news` (
  `no` int(11) NOT NULL,
  `r_time` datetime DEFAULT NULL,
  `kind` text COLLATE utf8_unicode_ci,
  `title` text COLLATE utf8_unicode_ci,
  `url` text COLLATE utf8_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
--
-- 資料表索引 `network_attack`
--
ALTER TABLE `network_attack`
  ADD PRIMARY KEY (`no`);

--
-- 資料表索引 `scraping_film`
--
ALTER TABLE `scraping_film`
  ADD PRIMARY KEY (`no`);

--
-- 資料表索引 `scraping_line_notify`
--
ALTER TABLE `scraping_line_notify`
  ADD PRIMARY KEY (`no`);

--
-- 資料表索引 `scraping_log`
--
ALTER TABLE `scraping_log`
  ADD PRIMARY KEY (`no`);

--
-- 資料表索引 `scraping_news`
--
ALTER TABLE `scraping_news`
  ADD PRIMARY KEY (`no`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--


--
-- 傾印資料表的資料 `scraping_news`
--


--
-- 使用資料表自動遞增(AUTO_INCREMENT) `network_attack`
--
ALTER TABLE `network_attack`
  MODIFY `no` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `scraping_film`
--
ALTER TABLE `scraping_film`
  MODIFY `no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7724;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `scraping_line_notify`
--
ALTER TABLE `scraping_line_notify`
  MODIFY `no` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `scraping_log`
--
ALTER TABLE `scraping_log`
  MODIFY `no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=396894;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `scraping_news`
--
ALTER TABLE `scraping_news`
  MODIFY `no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=278708;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
