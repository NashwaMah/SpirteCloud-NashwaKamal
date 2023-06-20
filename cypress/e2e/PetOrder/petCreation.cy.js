import { newPet ,updatePet , petURL } from '../../fixtures/apiResuests.json'

describe('Test Pet Creation', () => {


  it("Add new pet", () => {
    let response = cy.getAPIresponse('POST', petURL, newPet)
    response.then(res => {
      cy.log(JSON.stringify(res.body))
      expect(JSON.stringify(res.body)).eq(JSON.stringify(newPet))

    })
  })

  it("Update Pet", () => {
    let response = cy.getAPIresponse('PUT', petURL, newPet)
    response.then(res => {
      expect(res.status).eql(200)
      expect(JSON.stringify(res.body)).eq(JSON.stringify(newPet))
    })
  })

  it("Delete Pet", () => {
    cy.getAPIresponse('POST', petURL, newPet)
    let response = cy.getAPIresponse('delete', petURL+'/'+newPet.id)
    response.then(res => {
      expect(res.status).eql(200)
      expect(parseInt( res.body.message)).eql(newPet.id)
    })
  })

})