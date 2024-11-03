// Created by Vaiditya Tanwar
// this file is used to create a connection pool to the database
// and export the pool to be used in other files


import mysql2 from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql2.createPool(process.env.DB_URL);

export default pool;