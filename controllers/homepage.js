const Devices = require('../models/devices')

module.exports = async (req, res) => {
    const Device = await Devices.find({})
    res.render('index', {
        Device
    })
}
