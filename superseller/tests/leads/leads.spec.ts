import { test } from '@japa/runner'

test.group('get leads', () => {
  test('get a paginated list of leads', async ({ client }) => {
    const response = await client.get('/leads')
    response.assertStatus(200)
    console.log(response.body())
  })

})
