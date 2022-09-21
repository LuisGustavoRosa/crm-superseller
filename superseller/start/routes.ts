import Route from '@ioc:Adonis/Core/Route'

Route.resource('/sellers', 'SellersController')
.apiOnly()

Route.resource('/leads', 'LeadsController')
.apiOnly()

Route.resource('/contracts', 'ContractsController')
.apiOnly()

Route.resource('/clients', 'ClientsController')
.apiOnly()

Route.post('/addLeadSeller', 'LeadsController.addLeadSeller')
