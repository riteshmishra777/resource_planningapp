const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json()); // JSON data parse karne ke liye
app.use(cors()); // Frontend se connect hone ke liye

// MongoDB Connection
mongoose.connect('mongodb+srv://ritesh:ab12@@@cluster0.h2lkzrp.mongodb.net/')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Resource Schema
const resourceSchema = new mongoose.Schema({
    name: String,
    category: String,
    link: String
});

const Resource = mongoose.model('Resource', resourceSchema);

// API Routes
// 1. Add Resource (POST)
app.post('/api/resources', async (req, res) => {
    const { name, category, link } = req.body;
    const newResource = new Resource({ name, category, link });
    await newResource.save();
    res.json(newResource);
});

// 2. Get All Resources (GET)
app.get('/api/resources', async (req, res) => {
    const resources = await Resource.find();
    res.json(resources);
});

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    .on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.error(`Port ${PORT} is already in use. Trying another port...`);
            app.listen(0, () => {
                const newPort = app.address().port;
                console.log(`Server is now running on port ${3000}`);
            });
        } else {
            console.error('Server error:', err);
        }
    });