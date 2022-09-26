import { test } from '@japa/runner'

test.group('get sellers', () => {
  test('get a paginated list of sellers', async ({ client }) => {
    const response = await client.get('/sellers')
    response.assertStatus(200)
    console.log(response.body())
  })

})
