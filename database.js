const mongoose = require('mongoose');
const requireDir = require('require-dir');


mongoose.connect('mongodb://username:password@localhost:27017/api', { useNewUrlParser: true }).catch((error) => console.error(error));

requireDir('./src/models')
