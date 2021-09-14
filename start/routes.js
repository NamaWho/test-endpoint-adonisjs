'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/* ---------------------------- */

// GET - backend info
Route.get('/', 'InfoController.backend').middleware('guest')

// GET - user info (via jwt auth)
Route.get('/api/v1/user/:userId', 'UserController.show').middleware('auth').validator('ShowUser')

// POST - login user (if not yet logged)
Route.post('/api/v1/login', 'AuthController.login').middleware('guest').validator('Login')

/* ---------------------------- */

/* ---------[DEV_ONLY]--------- */

Route.post('/api/v1/user/new', 'UserController.create').middleware('auth').validator('CreateUser')
Route.get('/api/v1/user/', 'UserController.index').middleware('auth').validator('isAdmin')

/* ---------------------------- */