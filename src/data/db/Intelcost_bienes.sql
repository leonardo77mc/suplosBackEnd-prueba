-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 11-03-2021 a las 13:48:46
-- Versión del servidor: 10.1.37-MariaDB
-- Versión de PHP: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Intelcost_bienes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inmobiliaria`
--

CREATE TABLE `inmobiliaria` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `inmobiliaria`
--

INSERT INTO `inmobiliaria` (`id`, `name`) VALUES
(1, 'Inmobiliaria Intelcost');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `list_inmuebles`
--

CREATE TABLE `list_inmuebles` (
  `id` int(11) NOT NULL,
  `direccion` varchar(77) NOT NULL,
  `ciudad` varchar(77) NOT NULL,
  `telefono` varchar(21) NOT NULL,
  `codigo_postal` int(21) NOT NULL,
  `tipo` varchar(77) NOT NULL,
  `precio` varchar(21) NOT NULL,
  `id_inmueble` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `list_inmuebles`
--

INSERT INTO `list_inmuebles` (`id`, `direccion`, `ciudad`, `telefono`, `codigo_postal`, `tipo`, `precio`, `id_inmueble`) VALUES
(32, '4732 Ipsum. Rd.', 'Houston', '802-414-8872', 162925, 'Casa', '$45,912', 5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `inmobiliaria`
--
ALTER TABLE `inmobiliaria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `list_inmuebles`
--
ALTER TABLE `list_inmuebles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_inmueble` (`id_inmueble`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `list_inmuebles`
--
ALTER TABLE `list_inmuebles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
