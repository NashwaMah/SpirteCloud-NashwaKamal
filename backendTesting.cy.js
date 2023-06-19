describe('example to-do app', () => {
 

  it("Check Home Page header and URL", () => {
    cy.request('POST', 'https://petstore.swagger.io/v2/pet', 
      {
      "id": 0,
      "category": {
        "id": 0,
        "name": "new"
      },
      "name": "doggie",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "status": "available"
    }).then(
      (response) => {
        cy.log(JSON.stringify(response.body))
        expect (response.status).eql(200)
        // response.body is automatically serialized into JSON
      }
    )
   
  })

  
})