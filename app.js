const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Atur direktori statis
app.use(express.static('public'));

// Rute untuk melayani file HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
