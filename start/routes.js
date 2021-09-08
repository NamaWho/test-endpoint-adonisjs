'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/* --------------------------- */

// GET - backend info
Route.get('/', 'InfoController.backend')

// GET - user info (via jwt auth)
Route.get('/api/v1/user/:userId', 'UserController.getUser').middleware(['auth'])

// POST - login user (if not yet logged)
Route.post('/api/v1/auth/login', 'AuthController.login').middleware(['guest'])

/* --------------------------- */

// [DEV]

Route.post('/api/v1/auth/new', 'AuthController.register')

Route.get('/api/v1/user/', 'UserController.getAll')
