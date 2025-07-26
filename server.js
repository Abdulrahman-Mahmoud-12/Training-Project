// const { name } = require('ejs');
const express = require('express');
// const { use } = require('react');
const sqlite = require('sqlite3').verbose();

const app = express();
const port = 3000;
let users = [];

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Initialize SQLite database
const db = new sqlite.Database('./database.db', (err) => {
    if (err) {
        console.error('Error opening database ' + err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

db.run
    (`CREATE TABLE IF NOT EXISTS users 
    (id INTEGER PRIMARY KEY AUTOINCREMENT,first_name TEXT, last_name TEXT, address TEXT, phone INTEGER, date_of_birth TEXT, gender TEXT, email TEXT, password TEXT)`
    , (err) => {
        if (err) {
            console.error('Error creating table ' + err.message);
        } else {
            console.log('Users table created or already exists.');
        }
    });


app.get('/', (req, res) => {
    res.sendFile('./public/welcome-page.html', { root: __dirname });
});

app.get('/home', (req, res) => {
    res.sendFile('./public/welcome-page.html', { root: __dirname });
});

app.get('/welcome', (req, res) => {
    res.sendFile('./public/welcome-page.html', { root: __dirname });
});

app.get('/register', (req, res) => {
    res.sendFile('./public/register-page.html', { root: __dirname });
});


app.post('/register', (req, res) => {
    const request = req.body;
    db.run(`INSERT INTO users (first_name, last_name, address, phone, date_of_birth, gender, email, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [request.first_name, request.last_name, request.address, request.phone, request.date_of_birth, request.gender, request.email, request.password], function(err) {
        if (err) {
            console.error('Error inserting user: ' + err.message);
            res.status(500).send('Internal Server Error');
        } else {
            console.log(`A new user has been inserted successfully with ID ${this.lastID}`);
            res.redirect('/view');
        }
    });
});

app.get('/view', (req, res) => {
    db.all(`SELECT * FROM users`, [], (err, rows) => {
        if (err) {
            console.error('Error fetching users: ' + err.message);
            res.status(500).send('Internal Server Error');
            return;
        }
        
        users = rows.map(user => ({
            name: `${user.first_name} ${user.last_name}`,
            address: user.address,
            phone: user.phone,
            date_of_birth: user.date_of_birth,
            gender: user.gender,
            email: user.email
        }));
        // res.render('display-users', { users });
        
        const data = users.map(user =>
            `<div class="cell">${user.name}</div>
            <div class="cell">${user.address}</div>
            <div class="cell">0${user.phone}</div>
            <div class="cell">${user.date_of_birth}</div>
            <div class="cell">${user.gender}</div>
            <div class="cell">${user.email}</div>
            `
        ).join('\n');
        
        console.log('data', data);
        res.render('display-users', { users: data });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
