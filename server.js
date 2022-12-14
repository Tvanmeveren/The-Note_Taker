const express =require('express');
const path = require('path');
const fs =require("fs")

const { notes } = require('./db/db.json')
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')




const PORT = process.env.PORT || 3001;
const app = express();
// middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', apiRoutes)
app.use('/', htmlRoutes);
// 
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});