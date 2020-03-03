// Init project
const express = require('express');
const path = require('path');

// Init app
const app = express();

// Homepage Route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Timestamp API Routes
app.use('/api/timestamp', require('./routes/api/timestamp'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servicio iniciado en puerto ${PORT}`));
