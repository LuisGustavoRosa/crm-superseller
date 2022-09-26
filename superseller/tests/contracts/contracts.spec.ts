import { test } from '@japa/runner'

test.group('get contracts', () => {
  test('get a paginated list of contracts', async ({ client }) => {
    const response = await client.get('/contracts')
    response.assertStatus(200)
    console.log(response.body())
  })

})
