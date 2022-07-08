const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DevicesSchema = new Schema({
    name: String,
    model: String,
    releaseDate: String,
    dateUploaded: {
        type: Date,
        default: new Date()
    }
});

const Devices = mongoose.model('Devices', DevicesSchema);

module.exports = Devices;
