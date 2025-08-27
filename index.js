const express = require('express');
const app = express();
const path = require('path');
const port = 8000;

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (css, js, assets) from public/
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => res.render('index'));
app.get('/contact', (req, res) => res.render('contact'));
app.get('/about', (req, res) => res.render('about'));
app.get('/projects', (req, res) => res.render('projects'));

// 404 error page
app.use((req, res) => res.status(404).render('error'));

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
