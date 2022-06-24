const mongoose = require('mongoose');
const schema = new mongoose.Schema({ ten: 'string', tuoi: 'number' }, { collection: 'contact' });
module.exports = mongoose.model('contact', schema);