Um CEO muito importante de uma empresa também de suma importância, pediu para você criar um CRM(Customer Relationship Management) para sua empresa, seu objetivo:

Cadastrar vendedores (Sellers)
Cadastrar clientes (Clients)
Cadastrar potenciais clientes (Leads)
Cadastrar potenciais contratos (Contracts)

Regras básicas de negócio:
Um Vendedor pode ter diversos potenciais clientes mais um potencial cliente apenas 1 vendedor (1:N), o meu potencial cliente não deve ter ninguém vinculado, até um vendedor pegar o potencial cliente.
Um Potencial Contrato deve ter 1 potencial cliente vinculado a ele juntamente com 1 vendedor.
O Potencial Cliente deve ser capaz de assinar um contrato, ou recusar uma proposta, Caso assine o Potencial Cliente, se torna um Client.

Métricas que devo receber:
Quero saber quantos potenciais clientes se tornaram Clientes.
Quero saber quantos potenciais clientes, um determinado vendedor transformou em Cliente.
Quero saber quantos potenciais clientes não se tornaram Clientes.
Quero saber quantos potenciais clientes um determinado vendedor não transformou em Cliente.
Quero que meu vendedor possa listar potenciais clientes que ainda não tem vendedores vinculados.
Quero que meu vendedor possa se vincular a um potencial cliente, caso o potencial cliente ainda não tenha um vendedor vinculado.


Boas Práticas/Tecnologias:
AdonisJS - TS
Clean arch
Health check
API RESTFULL
Versionamento de API
Banco de dados que preferir. - Code First
Swagger
Organização de código é pastas.(NADA DE GO HORSE)
