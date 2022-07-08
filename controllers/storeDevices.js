const Devices = require('../models/devices')

module.exports = (req, res) => {
    Devices.create(req.body, {
    })
    return redirect('/')
}
