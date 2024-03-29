const express = require('express');
const classRoutes = require('./routes/classRoutes');
const studentRoutes = require('./routes/studentRoutes');
const schoolRoutes = require('./routes/schoolRoutes');

const app = express();

app.use(express.json());

app.use('/api/classes', classRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/schools', schoolRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

