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
    try {
        // 'backend' will be the name of the Docker service later
        const response = await axios.post('http://backend:5000/api/process', userData);
        res.send(`Backend says: ${JSON.stringify(response.data)}`);
    } catch (error) {
        res.status(500).send("Error connecting to backend");
    }
});

app.listen(3000, () => console.log('Frontend running on port 3000'));