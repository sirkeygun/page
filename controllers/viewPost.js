const Device = require('../models/devices')

module.exports = async (req, res) => {
    const device = await Device.findById(req.params.id)
    res.render('viewPost', {
        device
    })
}
