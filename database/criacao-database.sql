CREATE DATABASE toruga;
USE toruga;

CREATE TABLE `toruga` (
  `id` int UNIQUE auto_increment,
  `nickname` varchar(255),
  `waterVolume` float,
  `ph` float,
  `turbidity` float,
  `chlorine` float,
  `iqa` float,
  `lastAnalysis` timestamp,
  `createdAt` timestamp,
  `isDeleted` bit
);

drop table toruga;
