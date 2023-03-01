const { auth } = require('../middleware/auth')
const CONTROLLER = require('../controllers/location')

module.exports = {
  getAllLocations: {
    method: 'get',
    path: '/locations',
    middleware: [],
    handler: (req, res, next) => CONTROLLER.getAllLocations(req, res, next),
  },

  getAllLocationsAdmin: {
    method: 'get',
    path: '/locations/admin',
    middleware: [],
    handler: (req, res, next) => CONTROLLER.getAllLocationsAdmin(req, res, next),
  },

  postLocation: {
    method: 'post',
    path: '/location',
    middleware: [auth],
    handler: (req, res, next) => CONTROLLER.postLocation(req, res, next),
  },

  updateLocation: {
    method: 'put',
    path: '/location/:id',
    middleware: [auth],
    handler: (req, res, next) => CONTROLLER.updateLocation(req, res, next),
  },

  deleteLocation: {
    method: 'delete',
    path: '/location/:id',
    middleware: [auth],
    handler: (req, res, next) => CONTROLLER.deleteLocation(req, res, next),
  },

  getLocation: {
    method: 'get',
    path: '/location/:id',
    middleware: [auth],
    handler: (req, res, next) => CONTROLLER.getLocation(req, res, next),
  },

  disableHatay: {
    method: 'put',
    path: '/location/disable/hatay',
    middleware: [auth],
    handler: (req, res, next) => CONTROLLER.disableHatay(req, res, next),
  },
}
