const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.use(express.json());

const dataFile = path.join(__dirname, 'responses.json');

function loadResponses() {
    if (fs.existsSync(dataFile)) {
        return JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
    }
    return [];
}

function saveResponses(data) {
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
}

app.get('/api/responses', (req, res) => {
    const responses = loadResponses();
    res.json(responses);
});

app.post('/api/responses', (req, res) => {
    const responses = loadResponses();
    responses.push({ ...req.body, timestamp: new Date().toISOString() });
    saveResponses(responses);
    res.json({ success: true });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});