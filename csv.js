const express = require('express');
const multer = require('multer'); // Middleware for handling file uploads
const csvParser = require('csv-parser'); // Library for parsing CSV files
// const mongoose = require('mongoose');

const app = express();
const port = 3000;

// // Connect to MongoDB using Mongoose
// mongoose.connect('mongodb+srv://user:shivsagar@mern-todo.y2l5vyn.mongodb.net/?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// Define a schema for your CSV data
const csvDataSchema = new mongoose.Schema({
    id: String,
    name: String,
    branch: String,
    vehicle_no: String,
    phone_no: String,
    vehicle_type: Number,
    vehicle_model: String
    // status: Number,
    // trips: String,
    // history: String,
    // engaged_message: String,
});

const CsvData = mongoose.model('CsvData', csvDataSchema);

// Set up multer storage for file uploads
const storage = multer.memoryStorage(); // Store the uploaded file in memory
const upload = multer({ storage: storage });

// Define the route for file upload
app.post('/upload', upload.single('csvFile'), (req, res) => {
  const fileBuffer = req.file.buffer;

  const results = [];
  csvParser({ headers: true })
    .on('data', (data) => results.push(data))
    .on('end', () => {
      // Loop through the parsed CSV data and save it to MongoDB
      CsvData.insertMany(results)
        .then(() => {
          res.status(200).send('CSV data uploaded and saved successfully');
        })
        .catch((error) => {
          console.error(error);
          res.status(500).send('Error saving CSV data to MongoDB');
        });
    })
    .write(fileBuffer);
    res.send(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});