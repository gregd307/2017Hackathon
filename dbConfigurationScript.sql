USE MASTER
GO

IF Exists(select * from sysdatabases where name ='projectManagment')
		DROP DATABASE  projectManagment
GO

CREATE DATABASE  projectManagment
GO
