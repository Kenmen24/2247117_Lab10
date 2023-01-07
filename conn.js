const mysql = require('mysql2');
const express = require('express');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'EvG'
  });
  connection.connect(function (error) {
    if (error) throw error;
    console.log('Connected to the database');
  });

   
  const sql = 'CREATE TABLE games (gid int PRIMARY KEY,name VARCHAR(50) NOT NULL)';
  connection.query(sql, function (error, results) {
  if (error) throw error;
  console.log('Table created');
});

const sql2 = 'INSERT INTO games (gid,name) VALUES (?,?)';
  const values = 
      [001,'God of War: Ragnorok'];
connection.query(sql2, values, function (error, results) {
  if (error) throw error;
  console.log('Number of records inserted: ', results.affectedRows);
});
// Add

const sql3 = 'INSERT INTO games (gid,name) VALUES (?,?)';
  const values2 = 
      [002,'Call of Duty: MWII'];
connection.query(sql3, values2, function (error, results) {
  if (error) throw error;
  console.log('Number of records inserted: ', results.affectedRows);
});
const sql4 = 'INSERT INTO games (gid,name) VALUES (?,?)';
  const values3 = 
      [003,'Horizon: Forbidden West'];
connection.query(sql4, values3, function (error, results) {
  if (error) throw error;
  console.log('Number of records inserted: ', results.affectedRows);
});


  // Edit
 
    let sql6 = 'UPDATE games SET name=? WHERE gid = 001';
    const val1=['CyberPunk2077'];
        connection.query(sql6, val1, function (error, results) {
      if (error) throw error;
      console.log('Record edited');
    });

  
  // Delete
    let sql7 = 'DELETE FROM games WHERE gid = 003';
    const values7 = [003];
    connection.query(sql7, values7, function (error, results) {
      if (error) throw error;
      console.log('Record deleted');
    });

  
  // Search
  // app.get('/', function (req, res) {
const sqli = 'SELECT * FROM games WHERE name like ?';
const val2 = ['%' + 'of'+ '%'];
connection.query(sqli, val2, function (error, results) {
  if (error) throw error;
console.log(results);
});
  // });

  app.get('/', function (req, res) {
    const data = {
      key1: values,
      key2: values2,
      key3: values3
    };
    res.json(data);
  });

  
  app.listen(5000, function () {
    console.log('Server listening on port 5000');
  })

 