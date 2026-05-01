const express = require('express');
const axios = require('axios');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Render the form
app.get('/', (req, res) => {
    res.render('index');
});

// Handle form submission
app.post('/submit', async (req, res) => {
    const userData = req.body;

    const backendUrl = process.env.BACKEND_URL || 'http://127.0.0.1:5000/api/process';
    try {
        // 'backend' will be the name of the Docker service later
        const response = await axios.post(backendUrl, userData);
        res.send(`Backend says: ${JSON.stringify(response.data)}`);
    } catch (error) {
        console.error("Connection Error:", error.message);
        res.status(500).send("Error connecting to backend" + backendUrl);
    }
});

app.listen(3000, () => console.log('Frontend running on port 3000'));
