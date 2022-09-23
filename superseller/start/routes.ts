import Route from '@ioc:Adonis/Core/Route'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

Route.resource('/sellers', 'SellersController')
.apiOnly()

Route.resource('/leads', 'LeadsController')
.apiOnly()

Route.resource('/contracts', 'ContractsController')
.apiOnly()

Route.resource('/clients', 'ClientsController')
.apiOnly()

Route.post('/addLeadSeller', 'LeadsController.addLeadSeller')

Route.get('/indexLeadNoSeller','LeadsController.indexLeadNoSeller')
Route.post('/signedLead/:id','LeadsController.signedLead')

Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()

  return report.healthy
    ? response.ok(report)
    : response.badRequest(report)
})
